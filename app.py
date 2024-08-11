from flask import Flask, request, redirect, url_for, render_template, send_from_directory
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
import os

app = Flask(__name__, template_folder='.')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///doctors.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'assets/images/doctors'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  
db = SQLAlchemy(app)

auth = HTTPBasicAuth()

USERS = {
    "admin": "dev@4379"
}

@auth.get_password
def get_password(username):
    if username in USERS:
        return USERS.get(username)
    return None

class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    university = db.Column(db.String(100), nullable=False)
    specialization = db.Column(db.String(100), nullable=False)
    languages = db.Column(db.String(100), nullable=False)
    experience = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(200), nullable=False)
    availability = db.Column(db.JSON, nullable=False)

@app.route('/add_doctor', methods=['GET', 'POST'])
@auth.login_required
def add_doctor():
    if request.method == 'POST':
        if 'image_url' not in request.form:
            return redirect(url_for('add_doctor'))
        days = request.form.getlist('days[]')
        times = request.form.getlist('times[]')
        availability = {day: time for day, time in zip(days, times)}

        new_doctor = Doctor(
            name=request.form['name'],
            description=request.form['description'],
            university=request.form['university'],
            specialization=request.form['specialization'],
            languages=request.form['languages'],
            experience=request.form['experience'],
            image=request.form['image_url'],  
            availability=availability 
        )
        db.session.add(new_doctor)
        db.session.commit()

       
        return redirect(url_for('list_doctors'))

    return render_template('add_doctor.html')

@app.route('/list_doctors')
@auth.login_required
def list_doctors():
    doctors = Doctor.query.all()
    return render_template('list_doctors.html', doctors=doctors)

@app.route('/doctor-<int:doctor_id>')
def doctor_profile(doctor_id):
    doctor = Doctor.query.get_or_404(doctor_id)
    return render_template('doctor_profile.html', doctor=doctor)

@app.route('/assets/<path:filename>')
def serve_asset(filename):
    return send_from_directory('assets', filename)


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/about')
def about():
    return send_from_directory('.', 'about.html')

@app.route('/facilities')
def facilities():
    return send_from_directory('.', 'facilities.html')

@app.route('/services')
def services():
    return send_from_directory('.', 'services.html')

@app.route('/blog')
def blog():
    return send_from_directory('.', 'blog.html')

@app.route('/contact')
def contact():
    return send_from_directory('.', 'contact.html')

@app.route('/articles-<int:article_id>')
def article(article_id):
    articles = {
        1: 'article1.html',
        2: 'article2.html',
        3: 'article3.html',
        4: 'article4.html'
    }
    filename = articles.get(article_id)
    if filename:
        return send_from_directory('.', filename)
    else:
        return render_template('not-found.html'), 404

@app.route('/consultants')
def consultants():
    return send_from_directory('.', 'consultants.html')

@app.route('/ai')
def ai():
    return send_from_directory('.', 'ai.html')

@app.route('/doc-1')
def doc1():
    return send_from_directory('.', 'doc-1.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('not-found.html'), 404

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
