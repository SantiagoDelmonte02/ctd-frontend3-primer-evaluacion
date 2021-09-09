import React, { Component } from "react";

class Opciones extends Component {

  render() {
    return (
      <div>
        <div className="opcion">
          <button id="A" onClick={this.props.optionSelect} className="botones">A</button><h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="B" onClick={this.props.optionSelect} className="botones">B</button><h2>{this.props.opcionB}</h2>
        </div>
      </div>
    )
  }
}

export default Opciones;
