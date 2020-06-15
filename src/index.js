import React from "react";
import ReactDOM from "react-dom";
const fname = "Eknoor";
const lname = "Oberoi";
const no = "1";
//const year="2020";
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <h1>
      Hello {fname} {lname}
    </h1>

    <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
//by using JSX, we were able to insert HTML into JavaScript.
//It actually lets us add HTML inside a JavaScript
//file and then insert JavaScript inside that HTML
//ReactDOM puts html inside js, and {} puts js inside html
//JSX is javascript XML, helps to write HTML inside js
//big difference between expressions and statements is that an expression will be evaluated to
//a value right? Like it ends up, after all the code's been executed,
//it ends up equaling something. But this(statement) instead is actually asking the computer
//to do some work to evaluate
//this statement and then depending on that statement work out something.
//statements control and perform actions but do not become a value
//expression always resolve to a value
