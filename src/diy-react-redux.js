import React from 'react';
import PropType from 'prop-types';
import {bindActionCreators} from './diy-redux';
export const connect = (mapStatetoProps,mapDispatchoProps)=>(WrapperComponent) =>{
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
            store.subscribe(()=>this.update());
            this.update()
        }
        update(){
            const {store} = this.context;
            const storeState = mapStatetoProps(store.getState());
            const dispatch = bindActionCreators(mapDispatchoProps,store.dispatch)
            this.setState({
                props:{
                    ...this.state.props,
                    ...dispatch,
                    ...storeState,
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