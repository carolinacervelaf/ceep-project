import React, { Component } from 'react';
import CardNota from "../CardNota/CardNota";
import './estilo.css';

class ListaDeNotas extends Component {

  constructor(){
    super()
    this.state = {notas: []};
    this.novasNotas = this.novasNotas.bind(this)
  }

  componentDidMount(){
    this.props.notas.inscrever(this.novasNotas)
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this.novasNotas);
  }

  novasNotas(notas){
    this.setState({...this.state, notas})
  }

  render() {
    return (
      <ul className='lista-notas'>
        {this.state.notas.map((nota, index) => {
          return (
            <li className='lista-notas_item' key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} categoria={nota.categoria} apagarNota={this.props.apagarNota} indice={index} />
            </li>
          )
        })}
      </ul>
    );
  }
}


export default ListaDeNotas;