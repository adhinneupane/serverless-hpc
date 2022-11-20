var data

function pop() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

function invokeLambda(){
    var numberoffunctions = 5
    console.log(numberoffunctions)
    alert('Number of Functions:5 \n Workload: 1000 images \n https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/tensorflow-inspector-image-classification?newFunction=true&tab=testing \n Proceed with execution?')
    data = {
        "function": "machineLearning",
        "concurrency": 5
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
.then(document.getElementById('scalableresult').appendChild(scalableresultLink));   
}

function invokeSingleLambda(){
    var numberoffunctions = document.getElementById('concurrencyOptions').value
    console.log(numberoffunctions)
    alert('Number of Functions:1 \n Workload: 200 images \n https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/tensorflow-inspector-image-classification?newFunction=true&tab=testing \n Proceed with execution?')
    data = {
        "function": "machineLearning",
        "concurrency": numberoffunctions
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
        .then(document.getElementById('nonscalableresult').appendChild(nonscalableresultLink));    
        }

window.onload = function() {
var parallelLambda = document.getElementById('execute').addEventListener('click',invokeLambda)
console.log(parallelLambda);
var singleLambda = document.getElementById('executesingle').addEventListener('click',invokeSingleLambda)
console.log(singleLambda);
}

let nonscalableresultLink = document.createElement("a");
nonscalableresultLink.innerHTML = 'Function Results' 
nonscalableresultLink.href = "https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/tensorflow-inspector-image-classification?tab=monitoring";

let scalableresultLink = document.createElement("a");
scalableresultLink.innerHTML = 'Function Results' 
scalableresultLink.href = "https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions/tensorflow-inspector-image-classification?tab=monitoring";
