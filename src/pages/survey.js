import React, { Component } from "react"
import '../statics/samplePre.css'
import Report from './report';

class survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 1,
            value2: 1,
            value3: 1,
            value4: 1,
            value5: 1,
            value6: 1,
            value7: 1,
            value8: 1,
            value9: 1,
            value10: 1,
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

    sliderChange(sliderNum, event) {
        this.setState({
            [sliderNum]: event.target.value
        });
    }

    componentDidMount() {


        var slider2 = document.getElementById("myRange2");
        var output2 = document.getElementById("demo2");
        output2.innerHTML = slider2.value;

        slider2.oninput = function value2() {
            output2.innerHTML = slider2.value;
        }


        var slider3 = document.getElementById("myRange3");
        var output3 = document.getElementById("demo3");
        output3.innerHTML = slider3.value;

        slider3.oninput = function value3() {
            output3.innerHTML = this.value;
        }

        var slider4 = document.getElementById("myRange4");
        var output4 = document.getElementById("demo4");
        output4.innerHTML = slider4.value;

        slider4.oninput = function value4() {
            output4.innerHTML = this.value;
        }


        var slider5 = document.getElementById("myRange5");
        var output5 = document.getElementById("demo5");
        output5.innerHTML = slider5.value;

        slider5.oninput = function value5() {
            output5.innerHTML = this.value;
        }


        var slider6 = document.getElementById("myRange6");
        var output6 = document.getElementById("demo6");
        output6.innerHTML = slider6.value;

        slider6.oninput = function value6() {
            output6.innerHTML = slider6.value;
        }

        var slider7 = document.getElementById("myRange7");
        var output7 = document.getElementById("demo7");
        output7.innerHTML = slider7.value;

        slider7.oninput = function value7() {
            output7.innerHTML = slider7.value;
        }


        var slider8 = document.getElementById("myRange8");
        var output8 = document.getElementById("demo8");
        output8.innerHTML = slider8.value;

        slider8.oninput = function value8() {
            output8.innerHTML = slider8.value;
        }

        var slider9 = document.getElementById("myRange9");
        var output9 = document.getElementById("demo9");
        output9.innerHTML = slider9.value;

        slider9.oninput = function value9() {
            output9.innerHTML = slider9.value;
        }


        var slider10 = document.getElementById("myRange10");
        var output10 = document.getElementById("demo10");
        output10.innerHTML = slider10.value;

        slider10.oninput = function value10() {
            output10.innerHTML = slider10.value;
        }


    }



    render() {



        return (

            this.state.showComponent ?
                <Report val={this.state} /> :

                <div class="survey">
                    <div class="transparent-box">


                        <div class="surveyContainer">
                            <div>
                                Which Color Did You Find Most Calming? <br />
                                Rate Each Color From One - Five!

  </div><br />
                            <div class="columnSurvey">
                                <p>Red: {this.state.value1}</p>
                                <input type="range" min="1" max="5" value={this.state.value1} onChange={this.sliderChange.bind(this, 'value1')} id="myRange" class="slider" />

                                <p>Green: <span id="demo2" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value2} onChange={this.sliderChange.bind(this, 'value2')} id="myRange2" class="slider" />

                                <p>Blue: <span id="demo3" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value3} onChange={this.sliderChange.bind(this, 'value3')} id="myRange3" class="slider" />

                                <p>Gray: <span id="demo4" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value4} onChange={this.sliderChange.bind(this, 'value4')} id="myRange4" class="slider" />

                                <p>Yellow: <span id="demo5" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value5} onChange={this.sliderChange.bind(this, 'value5')} id="myRange5" class="slider" />
                            </div>

                            <div class="columnSurvey">
                                <p>Comic Sans: <span id="demo6" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value6} onChange={this.sliderChange.bind(this, 'value6')} id="myRange6" class="slider" />

                                <p>Ariel: <span id="demo7" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value7} onChange={this.sliderChange.bind(this, 'value7')} id="myRange7" class="slider" />

                                <p>Times New Roman: <span id="demo8" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value8} onChange={this.sliderChange.bind(this, 'value8')} id="myRange8" class="slider" />

                                <p>Impact: <span id="demo9" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value9} onChange={this.sliderChange.bind(this, 'value9')} id="myRange9" class="slider" />

                                <p>Century: <span id="demo10" class="value"></span></p>
                                <input type="range" min="1" max="5" value={this.state.value10} onChange={this.sliderChange.bind(this, 'value10')} id="myRange10" class="slider" />
                            </div>
                            <link rel="stylesheet" type="text/css" href="sample.css" />


                        </div>
                        <br /><br />

                        <center>
                            <input class="surveyButton" type="submit" value="Next Page" onClick={this._onButtonClick} />
                        </center>



                    </div>
                </div>

        )

    }

}

export default survey;