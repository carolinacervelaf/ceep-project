import React, { Component } from 'react';
import './estilo.css';


class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = { categorias: [] };
        this.novasCategorias = this.novasCategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this.novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this.novasCategorias)
    }

    novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    handleEventoInput(evento){
        if(evento.key === "Enter"){
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    render() {
        return <div className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className='lista-categorias_item'>{categoria}</li>
                    })}
                </ul>
                <input type="text" placeholder='Adicionar Categoria' onKeyUp={this.handleEventoInput.bind(this)} className='lista-categorias_input' />
        </div>;
    }
}

export default ListaDeCategorias;