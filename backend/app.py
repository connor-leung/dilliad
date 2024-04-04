from flask import Flask, request
from PIL import Image
from flask_sqlalchemy import SQLAlchemy
from drip import getOutfit
import random

app = Flask(__name__)

# CHANGE THIS TO THE PATH TO 'data.db' ON YOUR COMPUTER (ie. .../drip-ai/data.db)
app.config ['SQLALCHEMY_DATABASE_URI'] = "sqlite:////Users/connorleung/Documents/GitHub/drip-ai/data.db"
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
    return "Hello World"

@app.route('/upload-image', methods=['POST'])
def upload_image():
        file = request.files['data']
        with Image.open(file) as im:
            db_im = images(random.randint(1,1000), im.getbands())
            db.session.add(db_im)
            db.session.commit()
            
        return 'Image Processed!'

class images(db.Model):
    id = db.Column('id', db.Integer, primary_key = True)
    bands = db.Column('colour_bands', db.String(10))

    def __init__(self, id: int, bands):
        self.id = id
        self.bands = "".join(bands)

with app.app_context():
    db.create_all()


@app.route('/outfit')
def fetchOutfit():
    themes = "casual"
    # themes = request.args.getlist('themes')[0]
    return getOutfit(themes)