<p align="left" >
 <img width="150px" height="100px" alt="tensorflow-logo" src="https://user-images.githubusercontent.com/38281651/211432800-90035730-1f34-419d-b1b8-f726b745cb09.png">
 <img width="150px" height="100px" alt="aws-logo" src="https://user-images.githubusercontent.com/38281651/211433086-9002c229-c939-4b24-982a-d6767b9b8320.png">
 <img width="150px" height="100px" alt="docker-logo" src="https://user-images.githubusercontent.com/38281651/211433598-127016ab-0df8-42c1-b857-aeb15f81c62a.png">
 <img width="150px" height="100px" alt="openwhisk-logo" src="https://user-images.githubusercontent.com/38281651/211433466-8cc30e59-2e37-4ec4-a0f6-09a7ce3bb6fd.png">
  <img width="150px" height="100px" alt="python-logo" src="https://user-images.githubusercontent.com/38281651/211433701-596fa88c-a115-4a14-9435-136fe122f61f.png">
</p>






# Serverless FaaS for High Performance Computing

High Performance Computing (HPC) workloads such as predicting weather and genome sequencing utilize neural networks and popular machine learning libraries that require significant computing power and generally run-on coupled nodes that manage their own execution environments. This requires a layered architecture that is always available for exposing supercomputing power shared between different layers to an in house or remote user(s)/endpoint whenever necessary. This results in large waiting queues, unutilized idle times, custom configurations per cluster and ultimately high maintenance costs.  

Function as a Service (FaaS) has led to optimized cloud architectures that facilitate heavy workloads while keeping minimal idle times, always available and powerful fault tolerant implementations often coupled with pay as you use models. FaaS has been successfully utilized in designing microservices that power modern web-applications that have proliferated commercial and open-source clouds.

However, HPC infrastructure designed using only FaaS workloads that is available on run time and can perform scientific workloads are limited. In order to explore this area, we design a fully serverless workflow that can allow FaaSification of scientific workloads and evaluate the performance results against a parallel computing setup designed using virtualization technologies. We train and deploy a neural network to classify up to 3000 images of clothing and predict labels with 99% accuracy. 

We also explore some opensource implementations that stem from this design. 

The repository is not limited to: tensorflow image classification and includes examples for deploying use cases such as data-processing on Apache Openwhisk.

## Requirements: 

```

aws-cli	 
Apache openwhisk	
wsk cli 
docker
python	
TensorFlow 
```

## Setup WSK Cli: 
```
AUTH=<YOUR UUID>
APIHOST==<YOUR APIHOST> 
NAMESPACE=<YOUR NAMESPACE>
```
```
wsk property set --apihost <YOUR API HOST>  --auth  <Your auth code from the Runtime team>  namespace  <Your namespace from the Runtime team>
```
```
wsk list
```
## Setup aws-cli/docker: 
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

## Boot: 
```
cd ../serverless-hpc 
npm install 
node index.js
```

<img width="1057" alt="image" src="https://user-images.githubusercontent.com/38281651/202928806-98f26947-8efd-4ed7-beb7-7134f53f5663.png">


# Lambda Architecture and Autoscaling:

<p align="center" width="100%">
 <img alt="image" src="https://user-images.githubusercontent.com/38281651/211247823-160e3f5f-9581-444e-a5e8-25771b46901f.png">
</p>

## Results
<p align="center" width="100%">
 <img width="717" alt="image" src="https://user-images.githubusercontent.com/38281651/202928716-c30a769f-ed09-4d49-bdab-a4fe72a3d158.png">
</p>


## Author

Ashutosh Neupane
<br>adhinneupane2020@gmail.com</br>



