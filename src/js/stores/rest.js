import { createStore } from "redux";

const reducer = function(state, action){

    if( action.type === "POST" ){
      console.log(action.payload);
      
    }

    return state;
}

const store = createStore(reducer, 0);

store.subscribe( ()=>{
  console.log(store change, store.getState())
});
