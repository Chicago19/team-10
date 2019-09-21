from flask import Flask, render_template
app = Flask(__name__, static_folder="build/static", template_folder="build")

@app.route("/")
@app.route("/hello")
def hello():
    return render_template('index.html')


print('Starting Flask!')
app.debug = True
app.run()
