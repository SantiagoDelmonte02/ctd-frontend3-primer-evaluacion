import React, { Component } from "react";
import data from './data.json'
import Opciones from "./Opciones";

class Juego extends Component {

  constructor (props) {
    super(props)

    this.state = {
      contador : 0,
      seleccionAnterior : ""
    }

  }

  // this.setState({ pokemonList: pokemones, loading: false})

  handleClick = () => {
    alert("hice click!")
  }

  render() {
    return (
      <>
      <div className="historia">
        <h1>{data[this.state.contador].historia}</h1>

      </div>
      <div>
          <Opciones optionSelect={this.handleClick} evento={this.state.contador} />
      </div>
      </>
    )
  }
}

export default Juego;
