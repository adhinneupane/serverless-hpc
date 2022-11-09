

var data

function pop() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

function invokeLambda(){
    var numberoffunctions = 1
    console.log(numberoffunctions)
    alert(concurrencyConfig)
    data = {
        "function": "machineLearning",
        "concurrency": 1
    }
    console.log(data)
    
fetch('http://localhost:3000/aws-execute-single',
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


function invokeSingleLambda(){
    var numberoffunctions = document.getElementById('concurrencyOptions').value
    console.log(numberoffunctions)
    alert(numberoffunctions)
    data = {
        "function": "machineLearning",
        "concurrency": numberoffunctions
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

window.onload = function() {
var parallelLambda = document.getElementById('execute').addEventListener('click',invokeLambda)
console.log(parallelLambda)
var singleLambda = document.createProcessingInstruction('').addEventListener('click',invokeSingleLambda)
}