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
function bindActionCreator(creater,dispatch){
    return (...args) => dispatch(creater(...args))
}
export function bindActionCreators(creaters,dispatch){
    return Object.keys(creaters).reduce((ret,item)=>{
        ret[item] = bindActionCreator(creaters[item],dispatch);
        return ret
    },{})
}