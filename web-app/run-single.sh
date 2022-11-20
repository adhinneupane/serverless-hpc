# !/bin/bash
export AWS_PROFILE=lab
export AWS_REGION=us-east-1


BASE='{"start":'
START=1
END=200
RANGE=$START',"end":'$END
TAIL='}'

echo $BASE$RANGE$TAIL

aws lambda invoke --function-name machine-learning-complete --cli-binary-format raw-in-base64-out --payload $BASE$RANGE$TAIL --log-type Tail - | grep "LogResult"| awk -F'"' '{print $4}' | base64 --decode 

