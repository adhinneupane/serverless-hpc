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
1. Openwhisk is running.
2. wsk-cli is configured.
3. Docker is running.
```
Workload:
Generates dynamic html as webpages that can be returned to web applications. 

```   
Dependencies:                                                 
 urllib  
 jinja2  
```
Execution Enviroment: Docker Container

```
