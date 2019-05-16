import React, { Component } from "react"

class Image extends Component{
    render() {
        return (
            <div>
                <img src={this.props.myImage} />
                <caption>Help Me!</caption>
            </div>
        )
    }
}




export default Image;