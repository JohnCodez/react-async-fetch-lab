// create your App component here
import React from 'react'

class App extends React.Component{

    state = {
            list: []
    }
  
    render() {
        console.log(this.state.list)
        return(<h1></h1>)
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(listJ => this.setState({list: listJ}))
    }
    
}
export default App 