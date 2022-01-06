import React, { Component } from 'react';
import "./estilo.css";

class CardNota extends Component {
  render() {
    return (
      <section className='card-nota'>
        <header className='car-nota_cabecalho'>
          <h3 className='card-noa_titulo'>{this.props.titulo}</h3>
        </header>
        <p className='car-nota_texto'>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;