from datetime import datetime                                                   
from random import sample  
from os import path
from time import time                                                           
import os
import json
from urllib import request
from jinja2 import Template

sampleobj = {
    "username":"ashutosh", 
    "random_len":1000
}

prehtml = """
<!DOCTYPE html>
<html>
  <head>
    <title>Randomly generated data.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <style type="text/css">
      .container {
        max-width: 500px;
        padding-top: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Welcome adhinneupane!</p>
      <p>Data generated at: 10th November!</p>
      <p>Requested random numbers:</p>
      <ul>
        {% for n in random_numbers %}
        <li>{{n}}</li>
        {% endfor %}
      </ul>
    </div>
  </body>
</html>
"""

def main(params):
    # start timing
    name = sampleobj.get('username')
    size = sampleobj.get('random_len')
    cur_time = datetime.now()
    random_numbers = sample(range(0, 1000000), size)
    template = Template(prehtml)
    html = template.render(username = name, cur_time = cur_time, random_numbers = random_numbers)
    print(html)
    return {
        "numpy": html
    }




 
