import React, { Component } from 'react'
import './ColorBoxes.css'

class ColorBoxes extends Component {
    static defaultProps = {
        totalBoxes: 16,
        colors: ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
            'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
            'silver', 'teal', 'white', 'yellow']
    }

    state = {
        boxes: Array.from({ length: this.props.totalBoxes }).map(() => {
            const random = this.getRandom(this.props.colors.length);
            return this.props.colors[random];
        })
    }

    generateDiv(color, index) {
        return <div onClick={() => this.changeColor(color, index)}
            key={index} style={{ background: color, width: "200px", height: "200px" }}></div>
    }

    changeColor(color, index) {

        const availableColors = this.getNewAvailableColors(color);

        const randomIndex = this.getRandom(availableColors.length);
        const newColor = availableColors[randomIndex];

        const boxesUpdated = this.state.boxes.map((currentColor, i) => {
            return index === i ? newColor : currentColor;
        });

        this.setState({ boxes: boxesUpdated })
    }

    getNewAvailableColors(colorToExclude) {
        return this.props.colors.filter((currentColor) => {
            return currentColor !== colorToExclude;
        });
    }

    getRandom(end) {
        return Math.floor(Math.random() * end);
    }

    render() {
        return (
            <div className="colorBoxes">{
                this.state.boxes.map((color, index) => {
                    return this.generateDiv(color, index)
                })
            }
            </div>
        )
    }
}


export default ColorBoxes;
