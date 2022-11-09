# !/bin/bash
export AWS_PROFILE=lab
export AWS_REGION=us-east-1

BASE='{"start":'
START=100
END=200
RANGE=$START',"end":'$END
echo $RANGE
TAIL='}'

aws lambda invoke --function-name tensorflow-inspector-image-classification \
--cli-binary-format raw-in-base64-out \
--log-type Tail \
--payload $BASE$RANGE$TAIL \
response.json
echo  $BASE$RANGE$TAIL


