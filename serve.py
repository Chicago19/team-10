from flask import Flask, render_template, request
from calendar_integration import Session
import json

app = Flask(__name__, static_folder="build/static", template_folder="build")
cal = Session()

@app.route("/", methods=['POST'])
@app.route("/hello", methods=['POST'])
def hello():
    return {"test": True}

@app.route("/calendar", methods=['POST', 'GET'])
def calendar():
    event_name = request.json['cal_filter']
    print(event_name)
    print(type(event_name))
    return {'result': cal.search_events(event_name)}

    # return {"test": True}

@app.route("/score", methods=['POST', 'GET'])
def scoring():
    user_score = request.json['answers']
    correct_score = [1,1,2,3,4]
    score = 0
    for vals in zip(user_score, correct_score):
        if vals[0] == vals[1]:
            score += 1
    return {'score': score}

if __name__ == "__main__":
    app.debug = True
    app.run(host='199.253.248.17', port=5005)
