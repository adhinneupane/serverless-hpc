<!--
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
-->

# Serve Web pages with Openwhisk Actions

OpenWhisk standalone server is meant to run a simple OpenWhisk server for local development and test purposes. It can be
executed as a normal java application from command line.

```bash
$ ./gradlew :core:standalone:build
```
Workload:
Generates dynamic html as webpages that can be returned to web applications. 

```

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
      <p>Welcome username!</p>
      <p>Data generated at: cur_time!</p>
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
        "result": html
    }


```


```
#!/usr/bin/env bash

DOCKER_USERNAME=adhinneupane

cd ../dynamic-html

docker build -t python3action:web-application-rendering .

docker tag python3action:web-application-rendering $DOCKER_USERNAME/python3action:web-application-rendering

docker push $DOCKER_USERNAME/python3action:web-application-rendering

wsk action delete web-app-wsk

wsk action create web-app-wsk --docker $DOCKER_USERNAME/python3action:web-application-rendering action.py  

wsk action invoke web-app-wsk --result

```
