import React, {Component} from 'react'
import { Link } from 'react-router';

import LoadingComponent from './components/loading/loading';

class LayoutComp extends Component {
    render () {
        return (
            <div>
                <h1>ma webApp</h1>
                {this.props.children}
                <Link to="/" activeClassName="active">Acceuil</Link>
                <Link to="/apropos" activeClassName="active">A propos</Link>
                <Link to="/infos" activeClassName="active">Informations</Link>
                <LoadingComponent />
            </div>
        )
    }
}

export default LayoutComp