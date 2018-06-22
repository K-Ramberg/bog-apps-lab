import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreaturesIndex from './components/CreaturesIndex';
import CreatureShow from './components/CreatureShow';



class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={CreaturesIndex}/>
            <Route exact path='/:creatureId' component={CreatureShow}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
