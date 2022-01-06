import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className='card-nota'>
        <header className='car-nota_cabecalho'>
          <div className='div-delete-titulo'>
          <DeleteSVG className='img-svg-delete' onClick={this.apagar.bind(this)}/>
          <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
          </div>
        </header>
        <p className='car-nota_texto'>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;