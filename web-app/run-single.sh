# !/bin/bash
export AWS_PROFILE=lab
export AWS_REGION=us-east-1

BASE='{"start":'
START=1
END=1000
RANGE=$START',"end":'$END
TAIL='}'

aws lambda invoke --function-name machine-learning-complete \
--cli-binary-format raw-in-base64-out \
--log-type Tail \
--payload $BASE$RANGE$TAIL \
response.json
