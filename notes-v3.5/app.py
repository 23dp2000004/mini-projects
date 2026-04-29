# DB and App setup
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notes.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 0

db = SQLAlchemy(app)


class Note(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String(200), nullable = False)
    is_favorite = db.Column(db.Boolean, default = False)


with app.app_context():
    db.create_all()

# ROUTING
from flask import render_template, request, redirect

# homepage
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        content = request.form['content']

        new_note = Note(content=content)
        db.session.add(new_note)
        db.session.commit()

        return redirect('/')

    notes = Note.query.all()
    return render_template('index.html', notes=notes)

# favorite list
@app.route("/favorites")
def favorites():
    fav_notes = Note.query.filter_by(is_favorite=True).all()
    return render_template("favorites.html", notes=fav_notes)

# favorite heart
@app.route('/favorite/<int:id>', methods = ['GET','POST'])
def heart(id):
    if request.method == 'GET':
        note = Note.query.get(id)

        note.is_favorite = not note.is_favorite
        db.session.commit()

    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)






