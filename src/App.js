
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './home';
import CoinDetails from './details';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/details">
            <CoinDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}



export default App;
