import React from 'react';
import PropType from 'prop-types';
export const connect = (mapStatetoProps,mapDistchtoProps)=>(WrapperComponent) =>{
    return class ConnectComponent extends React.Component{
        static contextTypes = {
            store:PropType.object
        }
        constructor(props,context){
            super(props,context);
            this.state={
                props:{}
            }
        }
        componentDidMount(){
            const {store} = this.context;
            this.update()
        }
        update(){
            const {store} = this.context;
            const storeState = mapStatetoProps(store.getState())
            this.setState({
                props:{
                    ...storeState
                }
            })
        }
        render(){
            return <WrapperComponent {...this.state.props}></WrapperComponent>
        }
    }
}

export class Provider extends React.Component{
    static childContextTypes = {
        store: PropType.object
    }
    getChildContext(){
        return {
            store: this.props.store
        }
    }
    constructor(props){
        super(props);
        this.state={
            store:this.props.store
        }
    }
    render(){
        return this.props.children;
    }
}