import React, { Component } from "react";
import data from './data.json'

class Opciones extends Component {

  constructor (props) {
    super(props)

    this.state = {
      opcionA : data[this.props.evento].opciones.a,
      opcionB : data[this.props.evento].opciones.b,
      handleButton : this.props.handleClick
    }

  }

  render() {
    return (
      <div>
        <div className="opcion">
          <button id="A" onClick={this.props.optionSelect} className="botones">A</button><h2>{this.state.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="B" onClick={this.props.optionSelect} className="botones">B</button><h2>{this.state.opcionB}</h2>
        </div>
      </div>
    )
  }
}

export default Opciones;
