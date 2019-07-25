import React, { Component } from "react"


const colorMap = {
    "#0000FF": "BLUE",
    "#FF0000": "RED",
    "#FFFF00": "YELLOW",
    "#00FF00": "LIGHTGREEN",
    "#999999": "GREY"
}
const FREQ = process.env.REACT_APP_COLOR_FREQ || 1500;

class Colors extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "#999999"
        };
    }


    componentDidMount() {
       this.start()
    }

    getRandomColor() {
        var index = Math.round(Math.random() * 5);
        const colors = Object.keys(colorMap);
        return colors[index - 1];
    }

    start(){
        const mSelf = this;
        setInterval(() => {
            let color = mSelf.getRandomColor();
            let testUpdate = {
                date: new Date().getTime(),
                id: color,
                label:{
                    text: colorMap[color],
                    style:{backgroundColor:color,color:"white",width:"130px"}
                }
            }
            mSelf.props.onTestUpdate(testUpdate);
            mSelf.setState({
                color: color
            })
        }, FREQ);
    }



    render() {
        const { color } = this.state;
        return (
            <div style={{ backgroundColor: color, "height": "100vh" }} >
            </div>
        )
    }

}

export default Colors;