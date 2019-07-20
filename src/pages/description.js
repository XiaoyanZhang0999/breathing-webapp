import React, { Component } from "react"
import '../statics/description.css'
import img1 from '../images/step_1.png'
import img2 from '../images/step_2.png'
import img3 from '../images/step_3.png'


import Camera from './camera'

class description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        console.log("clicked")
        this.setState({
            showComponent: true,
        });
    }


    render() {
        return (

            this.state.showComponent ?
                <Camera /> :

                <div class="descriptionbg">
                    <div class="container">
                        <div class="card">
                            <h3 class="title"><b>Step One</b></h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <div class="text">
                                <p>Allow the webcam to lock onto your forehead and start analyzing your heart rate.</p>
                            </div>
                            <div class="circle">
                                <img class="stroke" src={img1} width="200" height="200" />
                            </div>
                        </div>
                        <div class="card">
                            <h3 class="title"><b>Step Two</b></h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                            <div class="text">
                                <p>After detecting of heart rate (in beats per minute/bpm), please keep looking at colors and fonts only.</p>
                            </div>
                            <div class="circle">
                                <img class="stroke" src={img2} width="200" height="200" />
                            </div>
                        </div>
                        <div class="card">
                            <h3 class="title"><b>Step Three</b></h3>
                            <div class="text">
                                <p>After the display, see the results of how colors and fonts raise or lower your heart rate (as bpm)!</p>
                            </div>
                            <div class="circle">
                                <img class="stroke" src={img3} width="200" height="200" />
                            </div>
                        </div>


                    </div>
                    <c onClick={this._onButtonClick}>Start</c>
                </div>


        )
    }

}

export default description;