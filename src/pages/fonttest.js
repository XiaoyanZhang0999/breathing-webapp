import React, { Component } from "react"
import Fonts from './fonts';
import CameraFeed from './camerafeed';
import '../statics/fonts.css'


/**
 * Start test and run webcam
 */

class FontTest extends Component {



    constructor(props) {
        super(props);
        this.state = {
            testState: {}
        };
    }

    onTestUpdate = (testState) => {
        this.setState({
            testState: testState
        })
    }

    onCamLocked = () => {
        this.setState({
            start: true
        })
    }

    componentDidMount() {
        setInterval(function () {
            var div = document.querySelector("#counter");
            var count = div.textContent * 1 - 1;
            div.textContent = count;
            if (count <= 0) {
                window.location.replace('survey');
            }
        }, 1000);
    }

    render() {
        const { testState } = this.state;
        const { start } = this.state;
        return (
            <div >
                {start? <div class="randColor"  > <Fonts start={start} onTestUpdate={this.onTestUpdate} /></div> : <div class="randColor"  ></div>} 
                <div style={{bottom:0, position:"absolute",right: 0,border: "5px solid white;"}} > <CameraFeed onCamLocked={this.onCamLocked} testState={testState} /></div>
                <div id="counter" style={{ top:0,position:"absolute"}}>30</div>    
            </div>
        )
    }

}

export default FontTest;