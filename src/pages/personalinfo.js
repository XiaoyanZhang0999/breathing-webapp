import React, { Component } from "react";
import Firebase from 'firebase';
import config from '../config';
import logo from '../images/breathingai_logo.png'
import Report from './report'

class personalinfo extends Component {
    constructor(props) {
        super(props);
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }
        this.state = {
            showComponent: false,
        };
        this.writeData = this.writeData.bind(this);
    }



    writeData() {

        var fname = this.getInputVal('fname');
        var lname = this.getInputVal('lname');
        var list = this.getInputVal('list');
        var location = this.getInputVal('location');
        var age = this.getInputVal('age');
        var email = this.getInputVal('email');
        var message = this.is_checked();
        Firebase.database().ref('messages').push({
            first_name: fname,
            last_name: lname,
            location: location,
            age: age,
            email: email,
            gender: list,
            message: message
        });

        this.setState({
            showComponent: true,
        });


    }


    getInputVal(id) {
        return document.getElementById(id).value;
    }

    is_checked() {
        var word = "";

        var blue = document.getElementById("blue").checked;
        if (blue == true) { word = word + "blue "; }

        var red = document.getElementById("red").checked;
        if (red == true) { word = word + "red "; }

        var yellow = document.getElementById("yellow").checked;
        if (yellow == true) { word = word + "yellow "; }

        var grey = document.getElementById("grey").checked;
        if (grey == true) { word = word + "grey "; }

        var green = document.getElementById("green").checked;
        if (green == true) { word = word + "green "; }

        var none = document.getElementById("none").checked;
        if (none == true) { word = word + "none " }


        return word;
    }

    render() {
        return (

            this.state.showComponent ?
                <Report val={this.props.location.state} /> :

                <div>
                    <div class="container">
                        <h1 class="brand"><img src={logo} alt="breathing" height="60" width="60" /> <br />Breathing.AI</h1>
                        <div class="candy">
                            <div class="wrapper">

                                <div class="contact">
                                    <h3>Please Fill Out The Survey To See Results</h3>
                                    <div class="alert">Your message has been sent</div>
                                    <form id="contactForm">
                                        <p>
                                            <label>First Name</label>
                                            <input type="text" name="fname" id="fname" />
                                        </p>
                                        <p>
                                            <label>Last Name</label>
                                            <input type="text" name="lname" id="lname" />
                                        </p>
                                        <p>
                                            <label>Gender</label>
                                            <select name="list" id="list" onchange="getSelectValue();">
                                                <option value="male" id="male">Male</option>
                                                <option value="female" id="female">Female</option>
                                                <option value="other" id="other">Other</option>
                                            </select>
                                        </p>
                                        <p>
                                            <label>Age</label>
                                            <input type="int" name="age" id="age" />
                                        </p>
                                        <p>
                                            <label>Location</label>
                                            <input type="text" name="location" id="location" />
                                        </p>
                                        <p>
                                            <label>Email Address</label>
                                            <input type="email" name="email" id="email" />
                                        </p>
                                        <p class="full">
                                            <label>Do you experience difficulty to perceive or distinguish any of the following colors? (check multiple boxes if needed)</label>
                                            <input type="checkbox" name="checkbox" id="blue" value="blue" /> Blue <br />
                                            <input type="checkbox" name="checkbox" id="yellow" value="yellow" /> Yellow <br />
                                            <input type="checkbox" name="checkbox" id="green" value="green" /> Green <br />
                                            <input type="checkbox" name="checkbox" id="grey" value="grey" /> Grey <br />
                                            <input type="checkbox" name="checkbox" id="red" value="red" /> Red <br />
                                            <input type="checkbox" name="checkbox" id="none" value="none" /> None of the Above <br />
                                        </p>
                                        <p class="full">
                                            <bu onClick={this.writeData.bind(this)}>Submit</bu>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="candy">

                            <div class="card">

                            </div>

                        </div>

                    </div>


                </div>
        )
    }

}

export default personalinfo;