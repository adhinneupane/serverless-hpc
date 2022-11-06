# !/bin/bash
export AWS_PROFILE=lab
export AWS_REGION=us-east-1

BASE='{"start":'
START=600
END=800
RANGE=$START',"end":'$END
TAIL='}'

echo $BASE$RANGE$TAIL

aws lambda invoke --function-name machine-learning-complete \
--cli-binary-format raw-in-base64-out \
--log-type Tail \
--payload $BASE$RANGE$TAIL \
response.json