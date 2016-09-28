import React, {Component} from 'react';
import { Link } from 'react-router'

class AproposComp extends Component {
    render () {
        return (
            <div>
                <h1>A propos</h1>

                <Link to="/apropos" activeClassName="active">A propos</Link>
                <Link to="/infos" activeClassName="active">Informations</Link>
            </div>
        )
    }
}

export default AproposComp
