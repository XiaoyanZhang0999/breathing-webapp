import React, { Component } from "react"


const colorMap = {
    "#0000FF": "BLUE",
    "#FF0000": "RED",
    "#FFFF00": "YELLOW",
    "#00FF00": "LIGHTGREEN",
    "#999999": "GREY"
}


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
            let color = mSelf.getRandomColor();
            let testUpdate = {
                date: new Date().getTime(),
                id: color,
                data: {
                    color: color,
                    name: colorMap[color]
                }
            }
            mSelf.props.onTestUpdate(testUpdate);
            mSelf.setState({
                color: color
            })
        }, 1500);
    }

    getRandomColor() {
        var index = Math.round(Math.random() * 5);
        const colors = Object.keys(colorMap);
        return colors[index - 1];
    }



    render() {
        const { color } = this.state;
        console.log(color)
        return (
            <div style={{ backgroundColor: color, "height": "100vh" }} >
            </div>
        )
    }

}

export default Colors;