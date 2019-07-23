import React, { Component } from "react";
import '../statics/report.css'
import breathingai from '../images/breathing.ai.png';
import colors from '../images/colors.png';
import fonts from '../images/fonts.png';
import checkList from '../images/checkList.png';


class report extends Component {
    constructor(props) {
        super(props);

    }



    openCity(cityName, evt) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";

        document.getElementById("result").innerHTML = this.props.val.value1 * 20 + "%";
        document.getElementById("result2").innerHTML = this.props.val.value2 * 20 + "%";
        document.getElementById("result3").innerHTML = this.props.val.value3 * 20 + "%";
        document.getElementById("result4").innerHTML = this.props.val.value4 * 20 + "%";
        document.getElementById("result5").innerHTML = this.props.val.value5 * 20 + "%";
        document.getElementById("result6").innerHTML = this.props.val.value6 * 20 + "%";
        document.getElementById("result7").innerHTML = this.props.val.value7 * 20 + "%";
        document.getElementById("result8").innerHTML = this.props.val.value8 * 20 + "%";
        document.getElementById("result9").innerHTML = this.props.val.value9 * 20 + "%";
        document.getElementById("result10").innerHTML = this.props.val.value10 * 20 + "%";

        var myElement = document.querySelector("#v1");
        myElement.style.width = document.getElementById("result").innerHTML;
        var myElement2 = document.querySelector("#v2");
        myElement2.style.width = document.getElementById("result2").innerHTML;
        var myElement3 = document.querySelector("#v3");
        myElement3.style.width = document.getElementById("result3").innerHTML;
        var myElement4 = document.querySelector("#v4");
        myElement4.style.width = document.getElementById("result4").innerHTML;
        var myElement5 = document.querySelector("#v5");
        myElement5.style.width = document.getElementById("result5").innerHTML;
        var myElement6 = document.querySelector("#v6");
        myElement6.style.width = document.getElementById("result6").innerHTML;
        var myElement7 = document.querySelector("#v7");
        myElement7.style.width = document.getElementById("result7").innerHTML;
        var myElement8 = document.querySelector("#v8");
        myElement8.style.width = document.getElementById("result8").innerHTML;
        var myElement9 = document.querySelector("#v9");
        myElement9.style.width = document.getElementById("result9").innerHTML;
        var myElement10 = document.querySelector("#v10");
        myElement10.style.width = document.getElementById("result10").innerHTML;


        var output1 = document.getElementById("v1");
        output1.innerHTML = this.props.val.value1 + "/5";
        var output2 = document.getElementById("v2");
        output2.innerHTML = this.props.val.value2 + "/5";
        var output3 = document.getElementById("v3");
        output3.innerHTML = this.props.val.value3 + "/5";
        var output4 = document.getElementById("v4");
        output4.innerHTML = this.props.val.value4 + "/5";
        var output5 = document.getElementById("v5");
        output5.innerHTML = this.props.val.value5 + "/5";
        var output6 = document.getElementById("v6");
        output6.innerHTML = this.props.val.value6 + "/5";
        var output7 = document.getElementById("v7");
        output7.innerHTML = this.props.val.value7 + "/5";
        var output8 = document.getElementById("v8");
        output8.innerHTML = this.props.val.value8 + "/5";
        var output9 = document.getElementById("v9");
        output9.innerHTML = this.props.val.value9 + "/5";
        var output10 = document.getElementById("v10");
        output10.innerHTML = this.props.val.value10 + "/5";


    }


    render() {
        return (
            <div class="mainreport">

                <div class="reportCard">

                    <div class="tab">
                        <center>
                            <img src={breathingai} style={{ width: '75px', height: '75px' }} /><br />
                            Sign Up</center>
                        <cardbutton id='cardButton' class="tablinks" onMouseOver={this.openCity.bind(this, 'London')}>
                            <center>    <img src={colors} style={{ width: '50px', height: '50px' }} /> <br />Heart Rate </center>
                        </cardbutton>
                        <cardbutton id='cardButton' class="tablinks" onMouseOver={this.openCity.bind(this, 'Paris')}>
                            <center>    <img src={fonts} style={{ width: '50px', height: '50px' }} /> <br /> Self Report </center>
                        </cardbutton>
                        <cardbutton id='cardButton' class="tablinks" onMouseOver={this.openCity.bind(this, 'Tokyo')}>
                            <center>  <img src={checkList} style={{ width: '50px', height: '50px' }} /> <br /> Resources </center>
                        </cardbutton>
                    </div>

                    <div id="London" class="tabcontent">
                        <h3 style={{ fontSize: '30px', color: 'blue ' }}>Color Analysis</h3>
                        <p>Your heart rate is in beats per minute (BPM).
                          Low BPM indicates your nervous system has a calm response to that color.
                          Self-report result is on a 1-5 scale.
                          Comparing the two results lead to interesting insights.
                          What have you found out?</p>
                        <div class="row">
                            <div class="column">
                                <h2>Heart Rate</h2>
                                <p></p>
                                <div class="containerCard">
                                    <div class="skills html">90%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills css">80%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills js">65%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills php">60%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills yellow">70%</div>
                                </div>
                            </div>

                            <div class="column">
                                <h2>Self-Report</h2>
                                <p></p>
                                <div class="containerCard2">
                                    <div id="v1" class="skills2 red"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v2" class="skills2 green"></div>
                                </div>


                                <p></p>
                                <div class="containerCard2">
                                    <div id="v3" class="skills2 blue"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v4" class="skills2 grey"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v5" class="skills2 yellow"></div>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div id="Paris" class="tabcontent">
                        <h3 style={{ fontSize: '30px', color: 'white' }}>Text Analysis</h3>
                        <p>Find out which font is the best for you!</p>


                        <div class="row">
                            <div class="column">
                                <h2>Heart Rate</h2>
                                <p></p>
                                <div class="containerCard">
                                    <div class="skills font1">90%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills font2">80%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills font3">65%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills font4">60%</div>
                                </div>

                                <p></p>
                                <div class="containerCard">
                                    <div class="skills font5">70%</div>
                                </div>
                            </div>

                            <div class="column">
                                <h2>Self-Report</h2>
                                <p></p>
                                <div class="containerCard2">
                                    <div id="v6" class="skills2 font1"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v7" class="skills2 font2"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v8" class="skills2 font3"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v9" class="skills2 font4"></div>
                                </div>

                                <p></p>
                                <div class="containerCard2">
                                    <div id="v10" class="skills2 font5"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div id="Tokyo" class="tabcontent">
                        <h3>Report</h3>
                        <p>Numeric Report</p>


                        Red: <span id="result"> </span><br />
                        Green: <span id="result2"> </span> <br />
                        Blue: <span id="result3"> </span><br />
                        Grey: <span id="result4"> </span> <br />
                        Yellow: <span id="result5"> </span><br />
                        Font1: <span id="result6"> </span><br />
                        Font2: <span id="result7"> </span> <br />
                        Font3: <span id="result8"> </span><br />
                        Font4: <span id="result9"> </span> <br />
                        Font5: <span id="result10"> </span>

                    </div>
                    <div class="clearfix"></div>


                </div>
            </div >
        )
    }

}

export default report;
