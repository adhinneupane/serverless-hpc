docker build -t python3action:benchmark-datascience .

docker tag python3action:benchmark-datascience adhinneupane/python3action:benchmark-datascience

docker push adhinneupane/python3action:benchmark-datascience

wsk action delete benchmark-datascience --result
wsk action delete benchmark-datascience --result
wsk action delete benchmark-datascience --result

wsk action create benchmark-datascience --docker adhinneupane/python3action:benchmark-datascience action.py

wsk action invoke benchmark-datascience --result