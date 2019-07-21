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
    }


    render() {
        return (
            <div >
                <div class="randColor" > <Colors /></div>
                <div class="camFeed" > <CameraFeed /></div>
            </div>
        )
    }

}

export default ColorTest;