from datetime import datetime
from flask import Flask, render_template, url_for, flash, redirect, request
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm, TicketForm
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os

DATABASE_URI = 'postgresql+psycopg2://tzuljsaj:pzCQc9GZqRnB4FH9Q9UsmMCLfabB-tOC@suleiman.db.elephantsql.com/tzuljsaj'
app = Flask(__name__, template_folder="templates")
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
db = SQLAlchemy(app)

CORS(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)
    tickets = db.relationship('Ticket', backref='user', lazy=True)
    admin_id = db.Column(db.Integer, db.ForeignKey('admin.id'), nullable=False, default=1)

    def __repr__(self):
        return f"User('{self.username}')"

class Admin(db.Model):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False, default='admin@gmail.com')
    password = db.Column(db.String(60), nullable=False, default='password')
    users = db.relationship('User', backref='admin', lazy=True)

    def __repr__(self):
        return f"Admin('{self.email}')"

    @classmethod
    def get_admin(cls):
        return cls.query.first()

class Passenger(db.Model):
    __tablename__ = 'passengers'
    id = db.Column(db.Integer, primary_key=True)
    passenger_name = db.Column(db.String(100), nullable=False)
    passenger_age = db.Column(db.Integer, nullable=False)
    passenger_sex = db.Column(db.String(1), nullable=False)
    ticket_id = db.Column(db.Integer, db.ForeignKey('tickets.id'), nullable=False)  

    def __repr__(self):
        return f"<Passenger('{self.passenger_name}', '{self.passenger_age}', '{self.passenger_sex}')>"

class Ticket(db.Model):
    __tablename__ = 'tickets'
    id = db.Column(db.Integer, primary_key=True)
    train_name = db.Column(db.String(100), nullable=False)
    train_number = db.Column(db.String(100), nullable=False)
    from_station = db.Column(db.String(100), nullable=False)
    from_station_code = db.Column(db.String(10), nullable=False)
    dept_time = db.Column(db.DateTime, nullable=False)
    date_of_journey = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    distance = db.Column(db.Integer, nullable=False)
    time = db.Column(db.String(100), nullable=False)
    class_booked = db.Column(db.String(15), nullable=False)
    to_station = db.Column(db.String(100), nullable=False)
    to_station_code = db.Column(db.String(10), nullable=False)
    arr_time = db.Column(db.DateTime, nullable=False)
    passengers = db.relationship('Passenger', backref='ticket', lazy=True) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  

    def __repr__(self):
        return f"<Ticket('{self.train_number}', '{self.train_name}')>"


from flask import request, jsonify
#signup route
@app.route('/signup', methods=['GET','POST'])
def signup():
    if request.method == "GET":
        return "Signup page"
    else:
        data = request.json
        hashed_password = data['password']
        new_user = User(username=data['username'], email=data['email'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully', 'user_id': new_user.id}), 201

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password == data['password']:
        return jsonify({'message': 'Login successful', 'user_id': user.id})
    return jsonify({'message': 'Invalid username or password'}), 401



# @app.route("/")
# def home():


# @app.route("/register", methods=['GET', 'POST'])
# def register():
#     form = RegistrationForm()
#     if form.validate_on_submit():
#         username = form.username.data
#         email = form.email.data
#         password = form.password.data
#         new_user = User(email=email, password=password, username=username, admin=Admin.get_admin())
#         db.session.add(new_user)
#         db.session.commit()
#         flash(f'Account created for {form.username.data}!', 'success')
#         return redirect(url_for('home'))
#     return render_template('register.html', title='Register', form=form)

# @app.route('/admin')
# def admin_dashboard():    
#     users = User.query.all()
#     return render_template('admin.html', users=users)

# @app.route("/login", methods=['GET', 'POST'])
# def login():
#     form = LoginForm()
#     if form.validate_on_submit():
#         user = User.query.filter_by(email=form.email.data).first()
#         if user and (user.password == form.password.data): 
#             flash('You have been logged in!', 'success')
#             return redirect(url_for('home', username=user.username))
#         else:
#             flash('Login Unsuccessful. Please check email and password', 'danger')
#     return render_template('login.html', title='Login', form=form)

# @app.route('/logout')
# def logout():
#     return redirect(url_for('login'))

# @app.route("/cancel_ticket/<int:ticket_id>", methods=['POST'])
# def delete_ticket(ticket_id, admin=False):
#     ticket_to_delete = Ticket.query.get(ticket_id)
#     username = ticket_to_delete.owner.username
#     if ticket_to_delete:
#         db.session.delete(ticket_to_delete)
#         db.session.commit()
#         flash('ticket cancelled!', 'success')
#     else:
#         flash('ticket not found.', 'danger')
#     if not admin:
#         return redirect(url_for('home', username=username))
#     else:
#         users = User.query.all()
#         return render_template('admin.html', users=users)

# @app.route('/book_ticket', methods=['GET', 'POST'])
# def book_ticket(username=None):
#     form = TicketForm()
#     user = User.query.filter_by(username=username).first()
#     if form.validate_on_submit():
#         ticket = Ticket(
#             passenger_name=form.passenger_name.data,
#             passenger_age=form.passenger_age.data,
#             passenger_sex=form.passenger_sex.data,
#             from_place=form.from_place.data,
#             to_place=form.to_place.data,
#             coach=form.coach.data,
#             date_of_booking=form.date_of_booking.data,
#             owner=user 
#         )
#         db.session.add(ticket)
#         db.session.commit()
#         flash('Your ticket has been booked successfully!', 'success')
#         return redirect(url_for('some_function_to_redirect'))
#     return redirect(url_for('home', username=username))

# @app.route('/delete_user/<int:user_id>', methods=['POST'])
# def delete_user(user_id):
#     user_to_delete = User.query.get(user_id)
#     db.session.delete(user_to_delete)
#     db.session.commit()
#     flash('User has been deleted.', 'success')
#     return redirect(url_for('admin'))

def initialize_database():
    with app.app_context():
        try:
            db.create_all()
            print("Database initialized.")
        except Exception as e:
            print(f"An error occurred while initializing the database: {e}")

def create_admin_user():
    with app.app_context():
        try:
            existing_admin = Admin.query.first()
            if existing_admin is None:
                admin_email = os.getenv('ADMIN_EMAIL', 'admin@gmail.com')
                admin_password = os.getenv('ADMIN_PASSWORD', '123456')
                hashed_password = generate_password_hash(admin_password, method='sha256')
                admin = Admin(email=admin_email, password=hashed_password)
                db.session.add(admin)
                db.session.commit()
                print("Admin user created.")
        except Exception as e:
            print(f"An error occurred while creating the admin user: {e}")

if __name__ == '__main__':
    initialize_database()
    create_admin_user()
    app.run(host='0.0.0.0', debug=True, port=5000)