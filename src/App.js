import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeSlot from './components/TimeSlot'




class App extends Component {
  render() {
    return (
      <div className="App">
        
        Simplistic Appointment Schdeuling Front-End
          
          <TimeSlot/>  
          
        
      </div>
    );
  }
}

export default App;
