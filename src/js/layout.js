import React, {Component} from 'react'

import LoadingComponent from './components/loading/loading';

class LayoutComp extends Component {
    render () {
        return (
            <div>

                {this.props.children}

                <LoadingComponent />
            </div>
        )
    }
}

export default LayoutComp
