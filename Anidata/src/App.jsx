import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnimeDashboard from './Components/AnimeDashboard';
import AnimeDetail from './Components/AnimeDetail'; // Import your detail component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AnimeDashboard} />
          <Route path="/details/:id" component={AnimeDetail} /> {/* Detail view route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
