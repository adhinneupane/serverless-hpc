cd ../serverless-hpc/web-apps/openwhisk/

# docker build -t python3action:web-application-rendering .

# docker tag python3action:web-application-rendering adhinneupane/python3action:web-application-rendering

# docker push adhinneupane/python3action:web-application-rendering

# wsk action delete web-app-wsk

wsk action create web-app-wsk --docker adhinneupane/python3action:web-application-rendering action.py  

wsk action invoke web-app-wsk --result | tee /Users/admin/masters-project/response.json

