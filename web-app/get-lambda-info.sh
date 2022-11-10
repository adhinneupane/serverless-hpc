export AWS_PROFILE=personal
export AWS_REGION=us-east-1

aws lambda get-function --function-name  tensorflow-inspector-image-classification | tee /Users/admin/project-defense/serverless-hpc/web-app/static/lambda-info.MD

