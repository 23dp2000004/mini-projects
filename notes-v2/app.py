# DB and App setup
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notes.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 0

db = SQLAlchemy(app)


class Note(db.Model):
    id = db.Column(db.Integer, primary_key = 1)
    content = db.Column(db.String(200), nullable =0)


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

# edit notes
@app.route('/edit/<int:id>', methods = ['GET','POST'])
def edit(id):

    note = Note.query.get(id)

    if request.method == 'POST':
        updated_content = request.form['content']

        note.content = updated_content
        db.session.commit()

        return redirect('/')
    
    return render_template('edit.html', note = note)




if __name__ == '__main__':
    app.run(debug=1)







