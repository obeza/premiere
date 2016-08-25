import React, {Component} from 'react';

import LoadingEvent from './loading-events';

class LoadingComponent extends Component {
    constructor(){
        super();
        this.state = {
            loadingCss:"hide"
        };

    }

    componentWillMount(){
        LoadingEvent.on('change', ()=>{
            console.log('change...');
            this.loading( LoadingEvent.getStatut() );
        });

        this.loading( LoadingEvent.getStatut() );

    }
    // componentDidMount(){
    //   LoadingEvent.uns
    // }

    loading(etat) {
        console.log('ok etat');
        if (etat){
            this.setState( { loadingCss : "show loading" });
        } else {
            this.setState( { loadingCss : "hide" });
        }
    }

    render () {
        return (
            <div  className={this.state.loadingCss}></div>
        )
    }
}

export default LoadingComponent
