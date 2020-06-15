//So components really allow us to split up a large file or a complex web structure into smaller components.
//And we also get the added benefit of reusing each of these components when we need the same functionality
//which happens a lot on web.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//we can use custom heading component inside the react code as if it was html element
ReactDOM.render(<App />, document.getElementById("root"));
