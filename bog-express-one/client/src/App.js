import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreaturesHome from './components/CreaturesHome';
import FeatureCreature from './components/FeatureCreature';


class App extends Component {


  render() {

    // const CreatureHomeWrapper = (props) => (
    //   <CreaturesHome creatures={this.state.creatures} {...props}/>
    // )


    return (
      <Router>
        <Switch>
          <Route exact path='/' component={CreaturesHome}/>
          <Route exact path='/:creatureId' component={FeatureCreature}/> 
        </Switch>
      </Router>
    );
  }
}

export default App;
