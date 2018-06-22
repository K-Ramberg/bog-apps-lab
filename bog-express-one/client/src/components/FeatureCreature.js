import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class FeatureCreature extends Component {

    state = {
        creature: {}
    }

    componentDidMount() {
        const creatureId = this.props.match.params.creatureId
        axios.get(`/api/creatures/${creatureId}`).then((res) => {
            this.setState({
                creature: res.data.creature
            })
        })
    }

    updateCreature = (event) => {
        event.preventDefault()
        const creatureId = this.props.match.params.creatureId  
        axios.patch(`/api/creatures/${creatureId}`, this.state.creature, {new:true}).then((res) => {
            this.setState({creature:res.data})
        })
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = { ...this.state }
        newState.creature[inputName] = userInput
        this.setState(newState)
    }


    render() {
        const creature = this.state.creature
        return (
            <div>
                <h3>Was Machst Du?!?! Das hier bin der {creature.name}</h3>
                <div>{creature.description}</div>
                <form onSubmit={this.updateCreature} >
                    <input type="text"
                        name="name"
                        placeholder={creature.name}
                        onChange={this.handleChange}/>
                    <input type="text"
                        name="description"
                        placeholder={creature.description}
                        onChange={this.handleChange}/>
                    <button type="submit">update</button>
                </form>
                <Link to="/">Back to creatures</Link>
            </div>
        );
    }
}

export default FeatureCreature;