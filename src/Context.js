import React from 'react';
import PropType from 'prop-types';

class Demo extends React.Component{
    static childContextTypes = {
        user: PropType.string
    }
    getChildContext(){
        return {
            user: 'baba'
        }
    }
    render(){
        return (
            <div><Child /></div>
        )
    }
}


class Child extends React.Component{
    static contextTypes = {
        user: PropType.string
    }
    render(){
        return <div>{this.context.user}</div>
    }
}
export default Demo;