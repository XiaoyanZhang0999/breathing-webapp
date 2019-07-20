import React, { Component } from "react"
import Colors from './colors';
import CameraFeed from './camerafeed';


/**
 * Start test and run webcam
 */

class ColorTest extends Component {



    constructor(props) {
        super(props);
    }


    render() {
        return (<div >
            <div > <Colors/></div>
            <div > <CameraFeed/></div></div>
        )
    }

}

export default ColorTest;