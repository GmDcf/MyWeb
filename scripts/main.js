var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
var myImage = document.querySelector('img');

function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The universe is great! ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'The universe is great, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/solar-system.jpg'){   
        myImage.setAttribute('Src' , 'images/JinXing.jpg');   
    }
    else{
        myImage.setAttribute('Src' , 'images/solar-system.jpg');
    }
}