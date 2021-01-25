/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = timeString.split().parseInt(timeString, 10)
 if ( time < 12) {
  greeting = "Good morning";
} else if ( time <= 5 || time >= 12 ) {
  greeting = "Good morning";}
  else {
  greeting = "Good evening";
}
}


/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  const message= document.getElementById('greeting')
  message.innerText = greeting;
    }
