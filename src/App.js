import React from 'react';
import './App.css';
import HomePage from './container/HomePage';
import Hls from 'hls.js'

 
 

class App extends React.Component {
   
  componentDidMount(){
    if(Hls.isSupported()){
      alert('yes')
    }
  }

  render() {

    return (
      <div>
         <HomePage />
         <video id='video'></video>
      </div>
    )
  }
}

 


export default App;
