from flask import Flask, request, render_template
from calendar_integration import Session
from backend.backend_official import backend_official
from backend.backend_score import backend_score
from backend.profile import backend_profile
from backend.config import config
import os

backend_official = backend_official(
                config['user'],
                config['pass'],
                config['host'],
                config['port'],
                config['db_name']
        )

backend_profile = backend_profile(
                config['user'],
                config['pass'],
                config['host'],
                config['port'],
                config['db_name']
        )

backend_score = backend_score(
                config['user'],
                config['pass'],
                config['host'],
                config['port'],
                config['db_name']
        )


app = Flask(__name__, static_folder='./temp/static', template_folder='build')
cal = Session()


# @app.route('/', methods=['POST', 'GET'])
# def hello():
#     return {'test': True}


@app.route('/landing')
@app.route('/registration')
@app.route('/login')
@app.route('/home')
@app.route('/loading')
def index():
    return render_template("index.html")


@app.route('/calendar', methods=['POST', 'GET'])
def calendar():
    event_name = request.json['cal_filter']
    print(event_name)
    print(type(event_name))
    return {'result': cal.search_events(event_name)}


@app.route('/score', methods=['POST', 'GET'])
def scoring():
    user_score = request.json['answers']
    correct_score = [1, 1, 2, 3, 4]
    score = 0
    for vals in zip(user_score, correct_score):
        if vals[0] == vals[1]:
            score += 1
    return {'score': score}


@app.route('/create_profile', methods=['POST', 'GET'])
def add_profile():
    profile_data = request.json
    print(profile_data)
    if backend_profile.insert_profile(profile_data):
        return {'return': True}
    else:
        return {'return': False}


@app.route('/auth_path', methods=['POST', 'GET'])
def authenticate():
    profile = request.json
    if backend_profile.__check_login_password(profile['email'], profile['password']):
        return {"result": True}
    else:
        return {"result": False}


@app.route('/email_test', methods=['POST', 'GET'])
def email_test():
    data = request.json
    if backend_profile.check_email(data['email']):
        return {"result": True}
    else:
        return {"result": False}


@app.route('/all_classes', methods=['POST', 'GET'])
def return_all_classes():

    ie_classes = ["Intro", "1", "2", "3", "4", "5"]
    wfd_classes = ["CustServ", "LatinFinance", "Insurance"]

    return {
        "output": {
            "ie": ie_classes,
            "wfd": wfd_classes
        }
    }

@app.route('/avalible_classes', methods=['POST', 'GET'])
def return_avalible_classes():
    data = request.json
    # Pass for now
    #If in levels 1-3, then cannot register
    #for Latinos in Finance or Bilingual insurance licensed sales
    #Must take customer service to qualify for LiF and BILS
    #For levels IE 3-5 can register for the LiF class or BILS
    #can double with IE 1-3 and customer service
    #can double with IE level 3-5 and LiF and BILS
    # # TODO: Do this
    return {"None": False}


@app.route('/user_classes', methods=['POST', 'GET'])
def return_classes():
    data = request.json
    if data['request_type'] == 'all':
        result = backend_official.get_all_user_classes(data['email'])
        output = {}
        for val in result:
            output.append(val)
        return output
    elif data['request_type'] == 'current':
        result = backend_official.get_cur_user_classes(data['email'])
        output = {}
        for val in result:
            output.append(val)
        return output


@app.route("/update_exam", methods=['POST', 'GET'])
def update_exam():
    data = request.json
    score = int(data['score'])
    email = data['email']
    cat = {
        0: 'Basic_Workbook',
        1: 'Basic',
        2: 'VentOne',
        3: 'VentTwo',
        4: 'VentThree',
        5: 'VenetFour'
    }

    if backend_official.update_written_exam(email, score, cat[score]):
        return {"result": True}
    return {"result": False}


@app.route('/write_class_score', methods=['POST', 'GET'])
def write_score():
    data = request.json
    email = data['email']
    class_name = data['class_name']
    class_year = data['class_year'],
    class_semester = data['class_semester'],
    score = data['score']

    if backend_score.write_class_score(email, class_name, class_year, class_semester, score):
        return {"result": True}
    return {"result": False}

@app.route('/update_class_score', methods=['POST', 'GET'])
def update_score():
    data = request.json
    email = data['email']
    class_name = data['class_name']
    class_year = data['class_year'],
    class_semester = data['class_semester'],
    score = data['score']

    if backend_score.update_score(email, class_name, class_year, class_semester, score):
        return {"result": True}
    return {"result": False}

@app.route('view_class_score', methods=['POST', 'GET'])
def view_class_score():
    data = request.json
    email = data['email']
    class_name = data['class_name']
    class_year = data['class_year'],
    class_semester = data['class_semester']

    score = backend_score.view_class_score(email, class_name, class_year, class_semester)
    if score not in [0, -1]:
        return {"score": score}
    else:
        return {"score": "error"}


if __name__ == '__main__':
    app.debug = True
    app.run(host='199.253.248.17', port=5005)
