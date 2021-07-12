import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="container min-h-screen px-2 mx-auto">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
