# Serverless FaaS for High Performance Computing

High Performance Computing (HPC) workloads such as predicting weather and genome sequencing utilize neural networks and popular machine learning libraries that require significant computing power and generally run-on coupled nodes that manage their own execution environments. This requires a layered architecture that is always available for exposing supercomputing power shared between different layers to an in house or remote user(s)/endpoint whenever necessary. This results in large waiting queues, unutilized idle times, custom configurations per cluster and ultimately high maintenance costs.  

Function as a Service (FaaS) has led to optimized cloud architectures that facilitate heavy workloads while keeping minimal idle times, always available and powerful fault tolerant implementations often coupled with pay as you use models. FaaS has been successfully utilized in designing microservices that power modern web-applications that have proliferated commercial and open-source clouds.

However, HPC infrastructure designed using only FaaS workloads that is available on run time and can perform scientific workloads are limited. In order to explore this area, we design a fully serverless workflow that can allow FaaSification of scientific workloads and evaluate the performance results against a parallel computing setup designed using virtualization technologies. We train and deploy a neural network to classify up to 3000 images of clothing and predict labels with 99% accuracy. 

We also explore some opensource implementations that stem from this design. 

The repository is not limited to: tensorflow image classification and includes examples for deploying use cases such as data-processing on Apache Openwhisk.

## Requirements: 

```
AWS account 
aws-cli	2.8.4  
Apache openwhisk	1.0.0 
wsk cli 	1.0.0 
docker	20.10.17 
python	3.9 
TensorFlow 	2.0 
```

### Setup WSK Cli 

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

## Setup AWS Cli and Docker

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

```
ps aux | grep docker 
```



## Deploy node website


```
cd ../serverless-hpc 
npm install 
node index.js
```

<img width="1057" alt="image" src="https://user-images.githubusercontent.com/38281651/202928806-98f26947-8efd-4ed7-beb7-7134f53f5663.png">


## Parallel processing for AWS EC2 instances

We used a t3.xlarge instance type from AWS With Linux AMI to achieve these results. 
The same version of above mentioned dev tools and source code was used to ensure minimum difference in runtime executions for each of these files. 


# Lambda Function Architecture

<p align="center" width="100%">
 <img alt="image" src="https://user-images.githubusercontent.com/38281651/211247823-160e3f5f-9581-444e-a5e8-25771b46901f.png">
</p>

## Results

<p align="center" width="100%">
 <img width="717" alt="image" src="https://user-images.githubusercontent.com/38281651/202928716-c30a769f-ed09-4d49-bdab-a4fe72a3d158.png">
</p>



   
## Remote HPC for devices for Edge computing.

[Standalone Performance](https://www.youtube.com/watch?v=XEmGgh0gMM4&ab_channel=AdhinNeupane)

[Serverless Execution](https://www.youtube.com/watch?v=XEmGgh0gMM4&list=TLPQMDkxMjIwMjLyDSlhyBRq0A&index=1&ab_channel=AdhinNeupane)

## Author

Ashutosh Neupane
adhinneupane2020@gmail.com



