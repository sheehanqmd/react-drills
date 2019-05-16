import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage={"https://i.kinja-img.com/gawker-media/image/upload/s--dEpW4lr3--/c_scale,f_auto,fl_progressive,q_80,w_1600/z7jcryloxjedsztssw39.jpg"}/>
      </div>
    );
  }
}

export default App;
