import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class CreaturesIndex extends Component {

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
        })
    }

    render() {
        const creaturesArray = this.state.creatures
        return (
            <div>
                {creaturesArray.map((creature) => {
                    return (
                        <div key={creature._id}>
                            <Link to={`/${creature._id}`}>{creature.name}</Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CreaturesIndex;