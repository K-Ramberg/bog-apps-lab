import React, { Component } from 'react';
import axios from 'axios'

class CreatureShow extends Component {

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
        console.log(creature.name)
        return (
            <div>
                <h4>{creature.name}</h4>
            </div>
        );
    }
}

export default CreatureShow;