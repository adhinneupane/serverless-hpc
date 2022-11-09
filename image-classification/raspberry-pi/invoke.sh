BASE='{"start":'
START=1
END=200
RANGE=$START',"end":'$END
TAIL='}'

echo $BASE$RANGE$TAIL

aws lambda invoke --function-name tensorflow-inspector-image-classification \
--cli-binary-format raw-in-base64-out \
--log-type Tail \
--payload $BASE$RANGE$TAIL \
response.json
