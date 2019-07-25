import React from "react";
import Webcam from "react-webcam";
import socketIOClient from "socket.io-client";


const tableStyle = {border:0,cellspacing:0,cellpadding:0,backgroundColor:"black"};

const frame_width = 320;
const frame_height = 240;

class CameraFeed extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  constructor(props) {
    super(props);
    this.state = {
      src: null,
      endpoint: "localhost:5000", //"https://breathing.appacea.com",
      result:  {}   ,
      isLocked: false
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
        var frame = mSelf.getFrame()
        if ( frame && frame.indexOf('data:image\/jpeg') !== -1) { //TODO: check mSelf.props.testState.id ??
          frame = frame.replace(/^data:image\/jpeg;base64,/, "");
          if (frame && frame !== "") {
            socket.emit('frame', { b64: frame, testState: mSelf.props.testState });
          }
        }
      }, 1000 / FPS);
    });

    socket.on('response', function (response) {
      let id = response.testState.id;
      let name = ((response.testState || {}).data || {}).name;
      let bpm = response.bpm;
      let isLocked = response.isLocked;
      let label = response.testState.label;

      console.log(response.testState)
      const { result } = mSelf.state;
      if(id){
        if (result[id]) {
          if(bpm !== -1 && bpm !== 0){
            result[id].bpm += bpm;
            //result[id].bpms.push(bpm);
            result[id].frames++;
          }
        }
        else {
          result[id] = {label:label, bpm: bpm, name: name || id, frames: 0, bpms:[] };
        }

      }
      if(isLocked){
        mSelf.props.onCamLocked();
      }
      mSelf.setState({
        src: 'data:image/jpeg;base64,' + response.b64,
        result: result,
        isLocked: isLocked
      });



    });

  }

  getFrame = () => {
    const imageSrc = this.webcam.getScreenshot();
    return imageSrc
  }


  render() {
    const videoConstraints = {
      facingMode: "user"
    };
    const { src } = this.state;
    const { result } = this.state;
    const { isLocked } = this.state;
    return (
<div >
   <div style={{position:"absolute",zIndex:1}}>
      <Webcam
         audio={false}
         height={frame_height}
         width={frame_width}
         ref={this.setRef}
         screenshotFormat="image/jpeg"
         videoConstraints={videoConstraints}
         />
   </div>
   <div style={{position:"relative",zIndex:2}}>
   <table style={tableStyle}>
      <tbody>
         <tr >
            <td style={{color:"white"}}>
               <img style={{paddingTop:"2px"}} height={frame_height} width={frame_width} id="feed" src={src}></img>
            </td>
            <td >
               <table  height={frame_height} width={frame_width} >
                  <tbody>
                     {Object.keys(result).map(function (key, index) {
                     return (
                     <tr key={key}>
                        <td class={(result[key].label||{}).class} style={(result[key].label||{}).style?(result[key].label||{}).style:{backgroundColor:"black",color:"white",width:"130px"}}>{(result[key].label||{}).text}</td>
                        <td style={{color:"white"}}>{result[key].frames>0?result[key].bpm / result[key].frames:0}</td>
                     </tr>
                     )
                     })}
                  </tbody>
               </table>
            </td>
         </tr>
      </tbody>
   </table>
   </div>
</div>);
  }
}

export default CameraFeed;