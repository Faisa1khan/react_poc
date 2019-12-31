import React,{createContext} from 'react';
import './App.css';
import HomePage from './container/HomePage';
import Hls from 'hls.js'

//Working vid :  http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8

 

class App extends React.Component {
   
  componentDidMount(){
    var video=document.querySelector('#video')
     
    if(Hls.isSupported()){
      var hls=new Hls({startLevel:6 })
       
      hls.attachMedia(video)
      hls.on(Hls.Events.MEDIA_ATTACHED,function () {//Event listener for attachment of media element
        
        console.log('media attached') 
        hls.loadSource("http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8");//Adding a source
         
          hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            console.log('Video will start now..')
               
            video.play()
          });
     
              
      })
      //Error Debugging
      hls.on(Hls.Events.ERROR,function (event,data) {
      //Required:  
        //data.response
        //data.type
        //data.details
         console.log(data)
      })
     
    }
  }

  render() {

    return (
      <div>
         <HomePage />
         <center>
           <video muted={true} style={{width:500,height:300}} data-state="hidden" id='video' controls >
           
           </video>
         </center>
      </div>
    )
  }
}

 


export default App;
