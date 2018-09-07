import React from 'react';
import PropType from 'prop-types';


const UserContext = React.createContext({
    user: 'test'
})
class Demo extends React.Component{
    render(){
        return (
            <UserContext.Provider value={{user: 'gogogo'}}>
            <div><Child /></div>
            </UserContext.Provider>
        )
    }
}


class Child extends React.Component{
    render(){
    return <UserContext.Consumer>{context => (<div>{context.user}</div>)}</UserContext.Consumer>
    }
}
export default Demo;