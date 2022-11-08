

var data

function pop() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

function invokeLambda(){
    var concurrencyConfig = document.getElementById('concurrencyOptions').value
    console.log(concurrencyConfig)
    alert(concurrencyConfig)
    data = {
        "function": "machineLearning",
        "concurrency": concurrencyConfig
    }
    console.log(data)
    
fetch('http://localhost:3000/aws-execute',
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
.then(console.log("here"));    
}

var button = $('#execute')

window.onload = function() {
var js = document.getElementById('execute').addEventListener('click',invokeLambda)
console.log(js)
}