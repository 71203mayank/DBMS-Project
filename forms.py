from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, TextAreaField, SelectField, IntegerField
from wtforms.validators import DataRequired, Length, Email, EqualTo, NumberRange
from wtforms.fields import DateField

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

class TicketForm(FlaskForm):
    passenger_name = StringField('Passenger Name', validators=[DataRequired(), Length(min=1, max=100)])
    passenger_age = IntegerField('Passenger Age', validators=[DataRequired(), NumberRange(min=0, max=120)])
    passenger_sex = SelectField('Passenger Sex', choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], validators=[DataRequired()])
    from_place = StringField('From', validators=[DataRequired(), Length(min=2, max=100)])
    to_place = StringField('To', validators=[DataRequired(), Length(min=2, max=100)])
    coach = StringField('Coach', validators=[DataRequired(), Length(min=1, max=15)])
    date_of_booking = DateField('Date of Booking', format='%d-%m-%Y', validators=[DataRequired()])
    submit = SubmitField('Book Ticket')