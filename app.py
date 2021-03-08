import os
#import magic
import urllib.request

from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
app = Flask(__name__)

@app.route("/")
def index():
   return render_template("index.html")

@app.route("/sendfile", methods=["POST"])
def send_file():
   #  print(request.files)
    print(request.files.getlist('files[]'))
    for file in request.files.getlist('files[]'):
       filename = secure_filename(file.filename)
       file.save(os.path.join('D:\python_file_upload-45', filename))
       print(file.filename)
    #print(request.files)
    return "successful_upload"

if __name__ == '__main__':
   app.run(debug = True)