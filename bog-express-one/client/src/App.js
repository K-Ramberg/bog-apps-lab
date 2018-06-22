import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import CreaturesHome from './components/CreaturesHome';


class App extends Component {

  state = {
    creatures: []
  }

  componentDidMount(){
    axios.get('/api/creatures').then((res) => {
      this.setState({creatures: res.data.creatures})
    }).catch((err) => {
      console.log('this is the error ' +err)
    })
  }

  render() {

    const CreatureHomeWrapper = (props) => (
      <CreaturesHome creatures={this.state.creatures} {...props}/>
    )

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={CreatureHomeWrapper}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
