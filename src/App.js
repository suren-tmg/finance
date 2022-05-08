import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Abouteng from "./english/pages/Abouteng";
import Homeeng from "./english/pages/Homeeng";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/english" component={Homeeng} />
          <Route exact path="/about-us" component={Abouteng} />

          <Route exact path="/हाम्रोबारे" component={About} />
        </Switch>
        
    </Router>
  );
}

export default App;
