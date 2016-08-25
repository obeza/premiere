import React, {Component} from 'react'

import LoadingEvent from "./../components/loading/loading-events";

export default class AccueilComponent extends Component {

    handleChange(e){
        console.log('e', e);
        LoadingEvent.show(e);
    }

    render () {
        return (
            <div>
            <h1>page d'acceuil</h1>
               <button onClick={this.handleChange.bind(this, true)} >hello</button>
               <button onClick={this.handleChange.bind(this, false)} >hello</button>
            </div>
        )
    }
}
