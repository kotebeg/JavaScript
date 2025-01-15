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





