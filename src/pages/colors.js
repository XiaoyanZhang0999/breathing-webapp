import React, { Component } from "react"


class Colors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#999999"
        };
    }


    componentDidMount() {
        const mSelf = this;
        setInterval(() => {
            mSelf.setState({
                color:mSelf.getRandomColor()
            })
        }, 1500);
    }

    getRandomColor(){
        var index = Math.round(Math.random() * 5);
        switch(index){
            case 1: 
                return "#0000FF"; //blue
            case 2: 
                return "#FF0000"; //red
            case 3: 
                return "#FFFF00"; //yellow
            case 4: 
                return "#00FF00"; //light green
            case 5: 
                return "#999999"; //grey
            default:
                return "#999999"; //grey
        }
    }



    render() {
        const { color } = this.state;
        console.log(color)
        return (
                <div style={{backgroundColor: color, height:480, width:960}} > 
                </div>
        )
    }

}

export default Colors;