# serverless-hpc



**Serverless FaaS (Function as a Service)** 
Zero wait time, fault tolerant execution of scientific workloads that include popular data processing, classification and computer vision libraries.

In the current configuration, we have implemented tensorflow image classification for 1000 images in MNIST library. 

Requirements: 
AWS account
aws-cli	2.8.4  
Apache openwhisk	1.0.0 
wsk cli 	1.0.0 
docker	20.10.17 
python	3.8 
TensorFlow 	2.0

Apache Openwhisk Endpoint is available on your computer. 
https://github.com/apache/openwhisk#readme

```
AUTH=<Your UUID>
APIHOST==<APIHOST> 
NAMESPACE=<Your namespace>
```
```
wsk property set --apihost adobeioruntime.net  --auth  <Your auth code from the Runtime team>  namespace  <Your namespace from the Runtime team>
```
```
wsk list
```

AWS / WSK cli installation and configuration is complete. 
aws-cli: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
wsk-cli: https://github.com/apache/openwhisk-cli

AWS credentials are setup.

```
~/.aws/credentials

AWS_ACCESS_KEY_ID:<AWS_ACCESS_KEY_ID>
SECRET_AWS_ACCESS_KEY_ID:<SECRET_AWS_ACCESS_KEY_ID>

~/.aws/config 

[dev]
region = <region>
output = json
cli-binary-format = raw-in-base64-out
```

Docker Daemon is logged in and running. 
https://docs.docker.com/get-started/overview/#:~:text=The%20Docker%20daemon%20(%20dockerd%20)%20listens,daemons%20to%20manage%20Docker%20services.

```
ps aux | grep docker 
```
<img width="1057" alt="image" src="https://user-images.githubusercontent.com/38281651/202928806-98f26947-8efd-4ed7-beb7-7134f53f5663.png">

```
cd ../serverless-hpc 
npm install body-parser express 
node index.js
```
## Results

<img width="717" alt="image" src="https://user-images.githubusercontent.com/38281651/202928716-c30a769f-ed09-4d49-bdab-a4fe72a3d158.png">

