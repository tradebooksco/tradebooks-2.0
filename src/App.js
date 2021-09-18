import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import RedirectPage from "./pages/redirect/redirect";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={LoginPage} path="/login"/>
          <Route component={RedirectPage} path="/redirect"/>
          <Route component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
