import React, { Component } from "react"
import { withRouter, Link } from 'react-router-dom';
import '../statics/main.css'
import logo from '../images/breathingai_logo.png'
import Description from './description';

class welcome extends Component {
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
                <Description /> :



                <div class="hero-image">
                    <div class="hero-text">
                        <a href="https://breathing.ai/" /><img src={logo} width="70" height="90" />
                        <h1 style={{ fontSize: '60px' }}>Find Your Calming Colors</h1>
                        <div class="button">
                            <b onClick={this._onButtonClick} >Next</b>
                        </div>
                    </div>
                </div>
        )
    }

}

export default withRouter(welcome);