export default class ArrayDeNotas {
    constructor(){
        this.notas = [];
        this.inscritos = [];
    };

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    };

    inscrever(func){
        this.inscritos.push(func);
    }

    desinscrever(func){
        this.inscritos = this.inscritos.filter(f => f!== func);
    }

    notificar(){
        this.inscritos.forEach(func => func(this.notas));
    }

    apagarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    };
};

class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    };
};