import React, { Component } from 'react';
import axios from 'axios'

class FeatureCreature extends Component {

    state = {
        creature: {}
    }

    componentDidMount(){
        const creatureId = this.props.match.params.creatureId
        axios.get(`/api/creatures/${creatureId}`).then((res)=> {
                this.setState({
                   creature: res.data.creature
                })
        })
    }

    render() {
        const creature = this.state.creature
        return (
            <div>
                <h3>Was Machst Du?!?! Das hier bin der {creature.name}</h3>
                <div>Achtung! {creature.description}</div>
            </div>
        );
    }
}

export default FeatureCreature;