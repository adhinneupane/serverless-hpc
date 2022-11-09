#!/bin/bash

tmp_file=$(mktemp /tmp/file.XXX)
for scripts in /Users/admin/project-defense/serverless-hpc/web-app/tmp/*; do
   sh $scripts &
   PID="$!"
   echo "$PID:$scripts" >> $tmp_file
   PID_LIST+="$PID "
done

for process in ${PID_LIST[@]};do
   wait $process
   exit_status=$?
   script_name=`egrep $process $tmp_file | awk -F ":" '{print $2}' | rev | awk -F "/" '{print $2}' | rev`
   echo "$script_name exit status: $exit_status"
done

rm -f $tmp_file