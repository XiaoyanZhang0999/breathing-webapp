import React, { Component } from "react"
import Colors from './colors';
import CameraFeed from './camerafeed';
import '../statics/colors.css'


/**
 * Start test and run webcam
 */

class ColorTest extends Component {



    constructor(props) {
        super(props);
        this.state = {
            testState: {}
        };
    }

    onTestUpdate = (testState) => {
        console.log(JSON.stringify(testState))
        this.setState({
            testState: testState
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
        return (
            <div >
                <div class="randColor" > <Colors onTestUpdate={this.onTestUpdate} /></div>
                <div class="camFeed" > <CameraFeed testState={testState} /></div>
                <div id="counter">30</div>
            </div>
        )
    }

}

export default ColorTest;