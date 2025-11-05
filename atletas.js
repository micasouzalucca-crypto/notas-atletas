export class Atletas{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }
    getIndor(){
        return `Atleta: ${this.nome}\nNotas Obtidas: ${this.notas.join(",")}`
    }
} 