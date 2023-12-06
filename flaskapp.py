from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import os

# DATABASE_URI = 'postgresql+psycopg2://tzuljsaj:pzCQc9GZqRnB4FH9Q9UsmMCLfabB-tOC@suleiman.db.elephantsql.com/tzuljsaj'
app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123456@localhost:5432/postgres'
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
    email = db.Column(db.String(120), unique=True, nullable=False, default='admin')
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
    train_date = db.Column(db.String(15), nullable=False)
    from_station = db.Column(db.String(100), nullable=False)
    from_station_code = db.Column(db.String(10), nullable=False)
    dept_time = db.Column(db.String(15), nullable=False)
    distance = db.Column(db.Integer, nullable=False)
    time = db.Column(db.String(100), nullable=False)
    class_booked = db.Column(db.String(15), nullable=False)
    to_station = db.Column(db.String(100), nullable=False)
    to_station_code = db.Column(db.String(10), nullable=False)
    arr_time = db.Column(db.String(15), nullable=False)
    mobile = db.Column(db.String(10), nullable=False)
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
        print("User with ID =", user.id, "logged in")
        return jsonify({'message': 'Login successful', 'user_id': user.id})
    return jsonify({'message': 'Invalid username or password'}), 401

#book tickets
@app.route('/book', methods=['POST'])
def book():
    data = request.json
    print(data)
    id = int(data['user_id'])
    print("User id =", id)
    ticket = Ticket(
        train_name = data['train_name'],
        train_number = data['train_number'],
        train_date = data['train_date'],
        from_station = data['from_station'],
        from_station_code = data['from_station_code'],
        dept_time = data['dept_time'],
        distance = data['distance'],
        time = data['time'],
        class_booked = data['class_booked'],
        to_station = data['to_station'],
        to_station_code = data['to_station_code'],
        arr_time = data['arr_time'],
        mobile = data['mobile'],
        user_id = id
    )
    db.session.add(ticket)
    db.session.commit()
    passengers = data['passengers']
    #save passengers
    for passenger in passengers:
        print(passenger)
        p = Passenger(
            passenger_name = passenger['name'],
            passenger_sex = passenger['sex'],
            passenger_age = passenger['age'],
            ticket_id = ticket.id
        )
        db.session.add(p)
        db.session.commit()    
    return jsonify({'message': 'Ticket booked successfully'}, {'ticket_id': ticket.id}), 201


def serialize_ticket(ticket):
    return {
        'id': ticket.id,
        'train_name': ticket.train_name,
        'train_number': ticket.train_number,
        'train_date': ticket.train_date,
        'from_station': ticket.from_station,
        'from_station_code': ticket.from_station_code,
        'dept_time': ticket.dept_time,
        'distance': ticket.distance,
        'time': ticket.time,
        'class_booked': ticket.class_booked,
        'to_station': ticket.to_station,
        'to_station_code': ticket.to_station_code,
        'arr_time': ticket.arr_time,
        'mobile': ticket.mobile,
        'user_id': ticket.user_id
    }

def serialize_passenger(passenger):
    return {
        'id': passenger.id,
        'passenger_name': passenger.passenger_name,
        'passenger_sex' : passenger.passenger_sex,
        'passenger_age' : passenger.passenger_age,
        'ticket_id': passenger.ticket_id
    }


#get tickets
@app.route('/history', methods=['GET'])
def get_tickets():
    user_id = request.args.get('user_id')
    id = int(user_id)
    print("User id =", id)

    tickets = Ticket.query.filter_by(user_id=id).all()
    serialized_tickets = [serialize_ticket(ticket) for ticket in tickets]
    #add passengers to tickets
    for ticket in serialized_tickets:
        passengers = Passenger.query.filter_by(ticket_id=ticket['id']).all()
        serialized_passengers = [serialize_passenger(passenger) for passenger in passengers]
        ticket['passengers'] =  serialized_passengers
    return jsonify({'tickets': serialized_tickets})

#cancel ticket
@app.route('/cancel', methods=['DELETE'])
def cancel_ticket():
    id = request.args.get('ticket_id')
    print("Ticket id =", id)
    #delete passengers
    passengers = Passenger.query.filter_by(ticket_id=id).all()
    for passenger in passengers:
        db.session.delete(passenger)
        db.session.commit()
    ticket = Ticket.query.filter_by(id=id).first()
    db.session.delete(ticket)
    db.session.commit()
    return jsonify({'message': 'Ticket cancelled successfully'}), 200


#delete user
@app.route('/delete', methods=['DELETE'])
def delete_user():
    id = request.args.get('user_id')
    print("User id =", id)
    #delete tickets
    tickets = Ticket.query.filter_by(user_id=id).all()
    for ticket in tickets:
        passengers = Passenger.query.filter_by(ticket_id=ticket.id).all()
        for passenger in passengers:
            db.session.delete(passenger)
            db.session.commit()
        db.session.delete(ticket)
        db.session.commit()
    user = User.query.filter_by(id=id).first()
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'}), 200

def serialize_user(user):
    return {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'password': user.password,
        'admin_id': user.admin_id
    }

#show all users
@app.route('/show', methods=['GET'])
def get_users():
    users = User.query.all()
    serialized_users = [serialize_user(user) for user in users]
    return jsonify({'users': serialized_users}), 200

#admin
@app.route('/admin', methods=['GET'])  
def admin_accsess():
    print(request.args)
    admin = Admin.get_admin()
    email = request.args.get('eemail')
    password = request.args.get('password')  
    if admin and admin.password == password and admin.email == email:
        return jsonify({'result': True}), 200
    return jsonify({'error': 'Invalid credentials'}), 401


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
                admin = Admin(email=admin_email, password=admin_password)
                db.session.add(admin)
                db.session.commit()
                print("Admin user created.")
        except Exception as e:
            print(f"An error occurred while creating the admin user: {e}")

if __name__ == '__main__':
    initialize_database()
    create_admin_user()
    app.run(host='0.0.0.0', debug=True, port=5000)