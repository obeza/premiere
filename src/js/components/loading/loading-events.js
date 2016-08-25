import { EventEmitter } from "events";

class LoadingEvent extends EventEmitter {

  statut = false;

    constructor(){
        super();
    }

    show(arg){
        console.log(arg);
        this.statut = arg;
        this.emit('change');
    }

    getStatut(){
        return this.statut;
    }


}

const loadingEvent = new LoadingEvent;

export default loadingEvent;
