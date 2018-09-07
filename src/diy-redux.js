export function createStore(reducer){
    let currentState = {};
    let currentListener = [];
    function getState(){
        return currentState;
    }
    function subscribe(lister){
        currentListener.push(lister);
    }
    function dispatch(action){
        currentState = reducer(currentState,action);
        currentListener.forEach(v => v());
    }
    dispatch({type:'@@init/redux'})
    return {getState,subscribe,dispatch}
}