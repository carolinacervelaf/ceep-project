import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias/ListadeCategorias';
import './assets/App.css';
import './assets/index.css'
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  };

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro criarNota={this.notas.adicionarNota.bind(this.notas)} categorias={this.categorias} />
      <main className='conteudo-principal'>  
        <ListaDeCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
        <ListaDeNotas notas={this.notas} apagarNota={this.notas.apagarNota.bind(this.notas)} />
      </main>
      </div>
    );
  }
}

export default App;
