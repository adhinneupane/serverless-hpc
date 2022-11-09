
document.getElementById('wskUpload').addEventListener("click",wskUploader)

function wskUploader(){
    var numberofImages = 100
    // document.getElementById('numberofImages').value
    console.log(numberofImages)
    data = {
        "funcPlatform": "Openwhisk",
        "numberofImages": numberofImages
    }
    console.log(data)
    
fetch('http://localhost:3000/execute-openwhisk',
{
    headers: {
        "Content-Type": "application/json"
      },
  method: "POST",
  body: JSON.stringify(data)
}
)
.then(function(response) {
return response;
})
.then(
    document.getElementById('results').appendChild(link))
}

let link = document.createElement("a");
link.innerHTML = "http://localhost:3000/response.html";
link.href = "http://localhost:3000/response.html"


