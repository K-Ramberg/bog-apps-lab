import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class CreaturesHome extends Component {
    render() {
        return (
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
        );
    }
}

export default CreaturesHome;