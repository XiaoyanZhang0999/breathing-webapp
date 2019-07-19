import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';
import Webcam from "react-webcam";
import renderHTML from 'react-render-html';
import ReactDOM from 'react-dom';
//import htmlContent from '../static/client.html';




class testPage extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000')
            .then(res => {
                console.log('this is res: ', res);
                this.setState({ response: res.data });
            })

    }
    render() {

        return (
            <div >{this.state.response}</div>
        )
    }
}
export default testPage;