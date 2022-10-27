import React, { Component } from "react";
import ToggleSwitch from "./toggle";

class App extends Component {
render() {
 return (
<div className="app">
  <br/> <br/><br/>
 <React.Fragment>
  <ToggleSwitch label="Subscribe" /><br/>
  <ToggleSwitch label="Notifications" />
</React.Fragment>
</div>
 );
}
}
export default App;