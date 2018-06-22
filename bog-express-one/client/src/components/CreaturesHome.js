import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class CreaturesHome extends Component {

    state = {
        creatures: [],
        newCreature: {
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('/api/creatures').then((res) => {
            this.setState({ creatures: res.data.creatures })
        }).catch((err) => {
            console.log('this is the error ' + err)
        })
    }

    handleNewChange = (event) => {
        const nameAtrOfInput = event.target.name
        const userInput = event.target.value

        const newState = { ...this.state }
        newState.newCreature[nameAtrOfInput] = userInput
        this.setState(newState)
    }

    handleNewSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/creatures', this.state.newCreature).then((res) => {
            console.log(res.data)

            this.props.history.push(`/${res.data._id}`)
        })
    }

    deleteCreature = (creatureId) => {
        axios.delete(`/api/creatures/${creatureId}`).then((res) => {
            this.setState({
                creatures: res.data.creatures})
        })
    }

    render() {

        const creatureArray = this.state.creatures

        return (
            <div>
                <div>
                    <h1>diese hier bin der Creatures</h1>
                    {creatureArray.map((creature) => {
                        return (
                            <div key={creature._id}>
                                <Link to={`/${creature._id}`}>{creature.name}</Link>
                                <button type="submit" onClick={() => this.deleteCreature(creature._id)}>Delete Creature</button>
                            </div>
                        )
                    })}
                </div>
                <h3>make New Creature</h3>
                <form onSubmit={this.handleNewSubmit}>
                    <input type="text"
                        placeholder="creature name"
                        name="name"
                        value={this.state.newCreature.name}
                        onChange={this.handleNewChange} />

                    <input type="text"
                        placeholder="creature description"
                        name="description"
                        value={this.state.newCreature.description}
                        onChange={this.handleNewChange} />
                    <button type="submit">Make It</button>
                </form>
            </div>
        );
    }
}

export default CreaturesHome;