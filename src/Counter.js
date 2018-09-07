import React from 'react';
import {connect} from './diy-react-redux';
import {Provider} from './diy-react-redux';
import {createStore} from 'redux';

function counter(state=0,action){
    switch(action.type){
        case 'ADD':
        return state +1;
        default:
        return 8;
    }
}
const store = createStore(counter);

function add(){
    return {type: 'ADD'}
}

class Counter extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={this.props.add}>click</button>
            </div>
        )
    }
}
function mapStatetoProps(state){
    return {
        num:state
    }
}
const CounterWrap = connect(
    state => ({num:state}),
    {add}
)(Counter);

const App = function(props){
    return <Provider store={store}><CounterWrap /></Provider>
}
export default App;