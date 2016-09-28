import React, {Component} from 'react'

import restAp from './../restApi.js'

class InfosComp extends Component {

  componentDidMount(){
    restAp.get('bonjour').then( (res)=>{
      console.log('response ' + res);
    });
  }

    render () {
        return (
            <div>
                <h1>infos</h1>
                <h2>Hello</h2>
            </div>
        )
    }
}

export default InfosComp
