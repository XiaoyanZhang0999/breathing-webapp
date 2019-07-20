import React from "react";
import Webcam from "react-webcam";
import socketIOClient from "socket.io-client";
 
class CameraFeed extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  constructor() {
      super();
      this.state = {
          src: null,
          endpoint: "http://127.0.0.1:5000"
      };
  }

  componentDidMount() {
    const mSelf = this;
    const FPS = 3;
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('connect', function() {
      socket.emit('my event', {data: 'I\'m connected!'});

      setInterval(() => {
          var frame = mSelf.getFrame() 
          if(frame && frame.indexOf('data:image\/jpeg')!==-1){
                  frame = frame.replace(/^data:image\/jpeg;base64,/, "");
                  if(frame && frame !== ""){
                      socket.emit('frame', frame);
                  }
              }
          }, 1000 / FPS);
    });

    socket.on('response', function(response) {
      mSelf.setState({
          src: 'data:image/jpeg;base64,'+response,
        });
    });

  }
  
  getFrame = () => {
    const imageSrc = this.webcam.getScreenshot();
    return imageSrc
}

  
  render() {
    const videoConstraints = {
      width: 480,
      height: 640,
      facingMode: "user"
    };
    const { src } = this.state;

    return     (
       <div >
          <div class="imgContainer">
            <Webcam
              audio={false}
              height={640}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={480}
              videoConstraints={videoConstraints}
            />  
          </div>
          <div class="imgContainer">
            <img id="feed" src={src}></img>
        </div>
      </div>);
  }
}

export default CameraFeed;