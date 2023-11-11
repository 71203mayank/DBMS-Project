from datetime import datetime
from flask import Flask, render_template, url_for, flash, redirect, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from forms import RegistrationForm, LoginForm, TicketForm
from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship, sessionmaker, declarative_base
from datetime import datetime

app = Flask(__name__, template_folder="templates")
bcrypt = Bcrypt(app)  

# Create a base class
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(100), unique=True, nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String(50), nullable=False)
    tickets = relationship('Ticket', backref='user', lazy=True)
    admin_id = Column(Integer, ForeignKey('admin.id'), nullable=False)

    def __repr__(self):
        return f"User('{self.username}')"

class Admin(Base):
    __tablename__ = 'admin'
    id = Column(Integer, primary_key=True)
    email = Column(String(120), unique=True, nullable=False, default='admin@gmail.com')
    password = Column(String(60), nullable=False, default='password')
    users = relationship('User', backref='admin', lazy=True)

    def __repr__(self):
        return f"Admin('{self.email}')"

    @classmethod
    def get_admin(cls, session):
        return session.query(cls).first()

class Passenger(Base):
    __tablename__ = 'passengers'
    id = Column(Integer, primary_key=True)
    passenger_name = Column(String(100), nullable=False)
    passenger_age = Column(Integer, nullable=False)
    passenger_sex = Column(String(1), nullable=False)
    ticket_id = Column(Integer, ForeignKey('tickets.id'), nullable=False)

    def __repr__(self):
        return f"<Passenger('{self.passenger_name}', '{self.passenger_age}', '{self.passenger_sex}')>"

class Ticket(Base):
    __tablename__ = 'tickets'
    id = Column(Integer, primary_key=True)
    train_name = Column(String(100), nullable=False)
    train_number = Column(String(100), nullable=False)
    from_station = Column(String(100), nullable=False)
    from_station_code = Column(String(10), nullable=False)
    dept_time = Column(DateTime, nullable=False)
    date_of_journey = Column(DateTime, nullable=False, default=datetime.utcnow)
    distance = Column(Integer, nullable=False)
    time = Column(String(100), nullable=False)
    class_booked = Column(String(15), nullable=False)
    to_station = Column(String(100), nullable=False)
    to_station_code = Column(String(10), nullable=False)
    arr_time = Column(DateTime, nullable=False)
    passengers = relationship('Passenger', backref='ticket', lazy=True) 
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)

    def __repr__(self):
        return f"<Ticket('{self.train_number}', '{self.train_name}')>"

DATABASE_URI = 'postgresql+psycopg2://tzuljsaj:pzCQc9GZqRnB4FH9Q9UsmMCLfabB-tOC@suleiman.db.elephantsql.com/tzuljsaj'

# Setup the engine, create a session and create all tables
engine = create_engine(DATABASE_URI)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Now you can use session to add, delete, or query the database.
from flask import request

@app.route("/")
@app.route("/home/<username>", methods=['GET', 'POST'])
def home(username=None):
    if username:
        user = User.query.filter_by(username=username).first()
        user_tickets = user.tickets if user else []
        return render_template('home.html', title=f'Welcome, {username}', tickets=user_tickets, hasUser=True)
    else:
        return '<h1>Home Page</h1>'


@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        username = form.username.data
        email = form.email.data
        password = form.password.data
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(email=email, password=hashed_password, username=username, admin=Admin.get_admin())
        session.add(new_user)
        session.commit()
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html', title='Register', form=form)

@app.route('/admin')
def admin_dashboard():    
    users = User.query.all()
    return render_template('admin.html', users=users)

@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data): 
            flash('You have been logged in!', 'success')
            return redirect(url_for('home', username=user.username))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    # If form.validate_on_submit() is False or the else branch is taken, render the template
    return render_template('login.html', title='Login', form=form)
    #     else:
    #         flash('Login Unsuccessful. Please check username and password', 'danger')
    # return render_template('login.html', title='Login', form=form)

@app.route('/logout')
def logout():
    return redirect(url_for('login'))

@app.route("/cancel_ticket/<int:ticket_id>", methods=['POST'])
def delete_ticket(ticket_id, admin=False):
    ticket_to_delete = Ticket.query.get(ticket_id)
    username = ticket_to_delete.owner.username
    if ticket_to_delete:
        session.delete(ticket_to_delete)
        session.commit()
        flash('ticket cancelled!', 'success')
    else:
        flash('ticket not found.', 'danger')
    if not admin:
        return redirect(url_for('home', username=username))
    else:
        users = User.query.all()
        return render_template('admin.html', users=users)

@app.route('/book_ticket', methods=['GET', 'POST'])
def book_ticket(username=None):
    form = TicketForm()
    user = User.query.filter_by(username=username).first()
    if form.validate_on_submit():
        ticket = Ticket(
            passenger_name=form.passenger_name.data,
            passenger_age=form.passenger_age.data,
            passenger_sex=form.passenger_sex.data,
            from_place=form.from_place.data,
            to_place=form.to_place.data,
            coach=form.coach.data,
            date_of_booking=form.date_of_booking.data,
            owner=user 
        )
        session.add(ticket)
        session.commit()
        flash('Your ticket has been booked successfully!', 'success')
        return redirect(url_for('some_function_to_redirect'))
    return redirect(url_for('home', username=username))

@app.route('/delete_user/<int:user_id>', methods=['POST'])
def delete_user(user_id):
    user_to_delete = User.query.get(user_id)
    session.delete(user_to_delete)
    session.commit()
    flash('User has been deleted.', 'success')
    return redirect(url_for('admin'))

def create_admin_user():
    with app.app_context():
        existing_admin = Admin.query.first()
        if existing_admin is None:
            admin = Admin(email='admin@gmail.com', password='123456')
            session.add(admin)
            session.commit()

if __name__ == '__main__':
    create_admin_user()
    app.run(debug=True, port=8060)
