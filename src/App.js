import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>CLARUSWAY</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/details/abc">Details</Link></li>
          </ul>
        </nav>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/details/:id' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
