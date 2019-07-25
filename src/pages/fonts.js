import React, { Component } from "react"


const FREQ = 700;
const RANGE = 8;
const TEXT = "I AM"
class Fonts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "#999999"
        };
    }


    componentDidMount() {
        const mSelf = this;
        setInterval(() => {
            let font = mSelf.getRandomFont();
            let testUpdate = {
                date: new Date().getTime(),
                id: font,
                label:{
                    text: TEXT,
                    class: font
                }
            }
            mSelf.props.onTestUpdate(testUpdate);
            mSelf.setState({
                font: font
            })
        }, FREQ);
    }

    getRandomFont() {
        return "font__"+this.getRandomInt(1, RANGE);
    }
    
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    render() {
        const {font} = this.state;
        return (
            <div class="random">
                 <p class={font} style={{fontSize:"140px"}}>{TEXT}</p>
            </div>
        )
    }

}

export default Fonts;