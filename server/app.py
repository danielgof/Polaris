from flask import Flask, request, jsonify, abort, Response
from flask_cors import CORS
import logging
import os
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import date

from api.building_api import building

app = Flask(__name__)
app.register_blueprint(building)
CORS(app)

if not os.path.isdir("./log"):
    os.mkdir("./log")
logging.basicConfig(filename=f'./log/{date.today()}.log', level=logging.DEBUG)

if __name__ == "__main__":
    app.run(port = 5000, debug = True)