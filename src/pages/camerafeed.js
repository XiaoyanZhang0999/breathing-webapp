import React from "react";
import Webcam from "react-webcam";
import socketIOClient from "socket.io-client";

class CameraFeed extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  constructor(props) {
    super(props);
    this.state = {
      src: null,
      endpoint: "https://breathing.appacea.com",
      result:  {}   
    }; 
  }

  componentDidMount() {
    const mSelf = this;
    const FPS = 3;
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('connect', function () {
      socket.emit('my event', { data: 'I\'m connected!' });

      setInterval(() => {
        //console.log("sending frame with "+JSON.stringify(mSelf.props.testState))
        var frame = mSelf.getFrame()
        if (mSelf.props.testState.id && frame && frame.indexOf('data:image\/jpeg') !== -1) {
          frame = frame.replace(/^data:image\/jpeg;base64,/, "");
          if (frame && frame !== "") {
            socket.emit('frame', {b64:frame,testState:mSelf.props.testState});
          }
        }
      }, 1000 / FPS);
    });

    socket.on('response', function (response) {
      //console.log("response "+JSON.stringify(response))
      let id = response.testState.id;
      let name = ((response.testState||{}).data||{}).name;
      let bpm = response.bpm;
      const { result } = mSelf.state;

      if(result[id]){
        result[id].name = name || id;
        result[id].bpm += bpm;
        result[id].frames++;
      }
      else{
        result[id]={bpm:bpm,name:name || id,frames:0};
      }
      console.log("result "+id)
      mSelf.setState({
        src: 'data:image/jpeg;base64,' + response.b64,
        result:result
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

    const { result } = this.state;
    console.log(JSON.stringify(result))
    return (
      <div style={{ display: 'flex' }}>
        <Webcam
          audio={false}
          height={640}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={480}
          videoConstraints={videoConstraints}
        />

        <img id="feed" src={src}></img>
        <table>
          <tbody>{Object.keys(result).map(function(key, index) {
               return (
                  <tr key = {key}>
                      <td>{result[key].name}</td>
                      <td>{result[key].bpm/result[key].frames}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
      </div>);
  }
}

export default CameraFeed;