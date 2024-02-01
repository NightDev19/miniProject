from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """
    This class definition defines a User model for the database.

    id: Represents the user's unique identifier.
    username: Represents the user's unique username.
    password: Represents the user's password.
    name: Represents the user's name.
    age: Represents the user's age.
    address: Represents the user's address.
    birthday: Represents the user's birthday.
    nickname: Represents the user's nickname.
    
    """
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    name = db.Column(db.String(50), nullable=True)
    age = db.Column(db.Integer, nullable=True)
    address = db.Column(db.String(100), nullable=True)
    birthday = db.Column(db.String(20), nullable=True)
    nickname = db.Column(db.String(20), nullable=True)
