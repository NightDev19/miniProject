from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# Use SQLite for simplicity
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Change this to a secret key for security

app.config['SECRET_KEY'] = '018a2924822a949a0a98517a48670945'
# Enable CORS for specific routes
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Initialize the database
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/api/signup', methods=['POST'])
def signup():
    """
    Handle user signup by processing the POST request data.
    Validates the username and password, checks for existing username,
    hashes the password, creates a new user, and commits the user to the
    database. Returns appropriate JSON responses based on the success
    or failure of the signup process.
    """
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        name = data.get('name')
        age = data.get('age')
        address = data.get('address')
        birthday = data.get('birthday')
        nickname = data.get('nickname')

        if User.query.filter_by(username=username).first():
            return jsonify({'error': 'Username already taken'}), 400

        hashed_password = generate_password_hash(
            password, method='pbkdf2:sha256')
        new_user = User(username=username,
                        password=hashed_password,
                        name=name,
                        age=age,
                        address=address,
                        birthday=birthday,
                        nickname=nickname,)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        print(f"Error during signup: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500


@app.route('/api/login', methods=['POST'])
def login():
    """
    Route for user login, takes POST request with username and password. 
    Returns success message and status code 200 if login is successful, 
    otherwise returns error message and status code 401.
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401


if __name__ == '__main__':
    app.run(debug=True)
