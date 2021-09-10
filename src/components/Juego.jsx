import React, { Component } from "react";
import data from './data.json'
import Historial from "./Historial";
import Opciones from "./Opciones";

const eleccionesPrevias = [];

class Juego extends Component {

  constructor (props) {
    super(props)

    this.state = {
      contador : 0,
      seleccionAnterior : ""
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      eleccionesPrevias.push(this.state.seleccionAnterior);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7){
      alert("Fin!")
    } else if (id === "A" && this.state.seleccionAnterior !== "A") {
      this.setState({ 
        contador: this.state.contador + 1, 
        seleccionAnterior: "A" 
      })
    } else if (id === "A" && this.state.seleccionAnterior === "A"){
      this.setState({ 
        contador: this.state.contador + 2
      })
    } else if (id === "B" && this.state.seleccionAnterior === "B"){
      this.setState({ 
        contador: this.state.contador + 3,
        seleccionAnterior: "B"
      })
    } else if (id === "B"){
      this.setState({ 
        contador: this.state.contador + 2,
        seleccionAnterior: "B"
      })
    } 

  }

  render() {
    return (
      <>
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones 
            optionSelect={this.handleClick} 
            opcionA={data[this.state.contador].opciones.a} 
            opcionB={data[this.state.contador].opciones.b} 
          />
        <Historial
          seleccionPrevia={this.state.seleccionAnterior}
          historial={eleccionesPrevias.map(
            (opcionAnterior, index) => (
              <li key={index}>{opcionAnterior}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
      
      </>
    )
  }
}

export default Juego;
