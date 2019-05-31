import React, {Component} from 'react';
import LogIn from './components/LogIn'
import Title from './components/Title'
import Content from './components/Content'

class App extends Component {
  render(){
    return (
      <div className="grid-container">
        <LogIn></LogIn>
        
        <Title></Title>

        <Content></Content>
      
      </div>
    );
  }
  
}

export default App;
