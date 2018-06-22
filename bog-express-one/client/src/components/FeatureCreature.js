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
                Was Machst Du?!?! Das hier bin der {creature.name}
            </div>
        );
    }
}

export default FeatureCreature;