//this file is used to denote all the components which are written in jsx
//we will leave index.js as a plain JavaScript file even if we're using some React and some JSX in it.
//And then we would have all of our components separated into individual files with the JSX extension.

//code is JSX because we have these HTML elements which are
//intermingling with actual Javascript code and we're only able to do this because the React module actually
//converts this into real Javascript using real JavaScript functions such as document.createElement

//So in order to use this code we of course have to import React from the React module.
import React from "react";

//function name in Pascal case ie 1st letter capital
//heading component, here heading component name is Heading
//using ES6 feature to import components from separate file
function Heading() {
  //returns html element created using js
  return <h1>My Favourite Foods</h1>;
}

//how do we actually get this file to know about this file?
//Well we have to use the ES6 import export functionality.

export default Heading;
