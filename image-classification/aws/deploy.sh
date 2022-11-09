export AWS_PROFILE=lab
export AWS_REGION=us-east-1

docker build -t  lambda-tensorflow-serverless .

aws ecr create-repository --repository-name lambda-tensorflow-serverless --image-scanning-configuration scanOnPush=true --region us-east-1

docker tag lambda-tensorflow-serverless:latest 852840441608.dkr.ecr.us-east-1.amazonaws.com/lambda-tensorflow-serverless:latest

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin  852840441608.dkr.ecr.us-east-1.amazonaws.com

docker push 852840441608.dkr.ecr.us-east-1.amazonaws.com/lambda-tensorflow-serverless:latest
