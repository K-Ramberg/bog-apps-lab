import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class CreaturesHome extends Component {

    state = {
        name: '',
        description: ''
    }

    handleChange = (event) => {
        const nameAtrOfInput = event.target.name
        const userInput = event.target.value

        const newState = {...this.state}
        newState[nameAtrOfInput] = userInput
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/creatures', this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/${res.data._id}`)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>diese hier bin der Creatures</h1>
                    {this.props.creatures.map((creature) => {
                        return (
                            <div key={creature._id}>
                                <Link to={`/${creature._id}`}>{creature.name}</Link>
                            </div>
                        )
                    })}
                </div>
                <h3>make New Creature</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="creature name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>

                    <input type="text" 
                    placeholder="creature description" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.handleChange}/>
                    <button type="submit">Make It</button>
                </form>
            </div>
        );
    }
}

export default CreaturesHome;