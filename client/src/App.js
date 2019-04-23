import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Books} />
      <Route path="/books" component={Books} />
      <Route path="books/:id" component={Detail} />
      <Route component={NoMatch}/>
    </Switch>
    </Router>
  );
}


export default App;