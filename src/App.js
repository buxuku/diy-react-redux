import {createStore} from './diy-redux';

const store = createStore(reducers);

function reducers(state=0,action){
  console.log(action)
  switch(action.type){
    case 'ADD':
    return state + 1;
    break;
    default:
    return 0;
  }
}
function listener(){
  const current=store.getState();
  console.log('new num is',current);
}
store.subscribe(listener);
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});