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

# OpenWhisk Standalone Server

```bash
$ ./gradlew :core:standalone:build
```

OpenWhisk standalone server is meant to run a simple OpenWhisk server for local development and test purposes. It can be
executed as a normal java application from command line.

This should start the OpenWhisk server on port 3233 by default and launch a Playground UI at port 3232.

The Playground UI can be used to try out simple actions. To make use of all OpenWhisk features.

This server by default uses a memory based store and does not depend on any other external service like Kafka and CouchDB.
It only needs Docker and Java to for running.


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
