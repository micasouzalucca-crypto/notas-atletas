import { Atletas } from "./atletas.js";

export class Nome extends Atletas{
    constructor(nome, notas){
        super(nome, notas)

    }
    calcularMediaNotas() {
        let notasOrdenadas = []

        if(this.notas){
            notasOrdenadas = this.notas.sort(function(a, b){
                return  a - b;
            })
        }
        let notasValidas = notasOrdenadas.slice(1, 4)

        let soma = notasValidas.reduce(function(contador, nota){
          return contador + nota;
        }, 0)
         return soma / notasValidas.length
        
    }
    apresentarResultado(){
        let media = this.calcularMediaNotas();
        console.log(this.getIndor()); 
        console.log(`Média Válida: ${media}`);
        console.log('');
    }
}