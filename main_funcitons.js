/*
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
*/


document.getElementById("demo").innerHTML = "Hello JavaScript!"

document.getElementById('myImage').src='pic_bulbon.gif'
document.getElementById('myImage').src='pic_bulboff.gif'

document.getElementById("demo").style.fontSize = "35px";

document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";

document.getElementById("demo").innerHTML = 5 + 6;

/*----------------------------------------this Keyword---------------------------------------*/
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/*
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/

/*----------------------------------------this in a Method--------------------------------------*/
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

/*
<!DOCTYPE html>
<html>
<body>

<h1>The JavaScript <i>this</i> Keyword</h1>
<p>In this example, <b>this</b> refers to the <b>person</b> object.</p>
<p>Because <b>fullName</b> is a method of the person object.</p>

<p id="demo"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>

</body>
</html>
*/

/*----------------------------------------this in Event Handlers--------------------------------------*/
onclick="this.style.display='none'"
/*
<!DOCTYPE html>
<html>
<body>

<h1>The JavaScript <i>this</i> Keyword</h1>

<button onclick="this.style.display='none'">Click to Remove Me!</button>

</body>
</html>
*/

/*----------------------------------------this Object Method Binding-------------------------------------*/
// Create an object:
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.myFunction();




// Display Possibilities

// Using document.write() after an HTML document is loaded, will delete all existing HTML:
document.write(5 + 6);
window.alert(5 + 6);
alert(5 + 6);
console.log(5 + 6);
window.print()  // print existing web page to printer

// Finding HTML Elements
document.getElementById(id)	          //Find an element by element id
document.getElementsByTagName(name)	  // Find elements by tag name
document.getElementsByClassName(name) //Find elements by class name


// Changing HTML Elements
element.innerHTML =  new html content	 // Change the inner HTML of an element
element.attribute = new value          // 	Change the attribute value of an HTML element
element.style.property = new style     // Change the style of an HTML element
element.setAttribute(attribute, value) // Change the attribute value of an HTML element


// Adding and Deleting Elements
document.createElement(element)   // Create an HTML element
document.removeChild(element)     // Remove an HTML element
document.appendChild(element)     // Add an HTML element
document.replaceChild(new, old)   // Replace an HTML element
document.write(text)              // Write into the HTML output stream



// Finding HTML Element by Id
const element = document.getElementById("intro");

// Finding HTML Elements by Tag Name
const element = document.getElementsByTagName("p");

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

//Finding HTML Elements by Class Name
const x = document.getElementsByClassName("intro");

// Finding HTML Elements by CSS Selectors
/*
If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
This example returns a list of all <p> elements with class="intro".
*/
const x = document.querySelectorAll("p.intro");


//Finding HTML Elements by HTML Object Collections
// This example finds the form element with id="frm1", in the forms collection, and displays all element values:
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;


// JavaScript Form Validation
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

/*
<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>

<h2>JavaScript Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

</body>
</html>
*/

// Changing HTML Style
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";

/*
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

</body>
</html>
*/

/*----------------------------------------JavaScript HTML DOM Events---------------------------------------*/

onclick="this.innerHTML='Ooops!'"
/*
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<h2 onclick="this.innerHTML='Ooops!'">Click on this text!</h2>

</body>
</html>
*/


// -----------------  function call
onclick="changeText(this)"

/*
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<h2 onclick="changeText(this)">Click on this text!</h2>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>

</body>
</html>

*/


// -----------------  asign value to html element
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
/*
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<p>Click the button to display the date.</p>
<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 

*/


// -----------------  on click event
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

/* 
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Events</h2>

<p>Click "Try it" to execute the displayDate() function.</p>
<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
</html> 

*/



