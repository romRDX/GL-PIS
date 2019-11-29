import banco from './db.js';

export class Model{

    constructor(){
        // this.DBsimulator = banco;
        this.lastID = 5;

        let storage = JSON.parse(sessionStorage.getItem('latasDB'));

        if(storage){
            this.DBsimulator = storage;
        } else {
            sessionStorage.setItem('latasDB', JSON.stringify(banco));
        }
    }

    configurar(){
        this.url = 'http://localhost:8000/api';
    }

    fazerRegistro(info){

        // fetch(
        //     this.url,
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify( info )
        //     }
        //     ).then( response => {
        //         console.log('RESPONSE: ',response);
        // } );

        this.lastID += 1;
        info.id = this.lastID;

        this.DBsimulator.push(info);
        this.salvarStorage();

        return 'sucesso';
    }

    salvarStorage(){
        sessionStorage.setItem('latasDB', JSON.stringify(this.DBsimulator));
    }

    fazerAlteracao(info){

        for( var i = 0; i < this.DBsimulator.length; i++){ 
            if ( this.DBsimulator[i].id == info.id) {
                
                if(info.nome){
                    this.DBsimulator[i].nome = info.nome;
                }
        
                if(info.fabricante){
                    this.DBsimulator[i].fabricante = info.fabricante;
                }
        
                if(info.tipo){
                    this.DBsimulator[i].tipo = info.tipo;
                }
        
                if(info.pais){
                    this.DBsimulator[i].pais = info.pais;
                }
        
                if(info.mililitros){
                    this.DBsimulator[i].mililitros = info.mililitros;
                }
        
                if(info.compradoEm){
                    this.DBsimulator[i].compradoEm = info.compradoEm;
                }
        
                if(info.valor){
                    this.DBsimulator[i].valor = info.valor;
                }

                this.salvarStorage();
                return 'sucesso';
            }
        }
    }

    fazerRemocao(info){

        for( var i = 0; i < this.DBsimulator.length; i++){ 
            if ( this.DBsimulator[i].id == info.id) {
              this.DBsimulator.splice(i, 1);
              this.salvarStorage();
              return 'sucesso';
            }
        }

        
    }

    fazerVisualizacao(info){
       
        let resposta = [];

        if(info == 'todos'){
            resposta[0] = 'sucesso';
            resposta[1] = this.DBsimulator;
        } else {
            this.DBsimulator.forEach(element => {
                if(info == element['id']){
                    resposta[0] = 'sucesso';
                    resposta[1] = [element];
                }
            });
        }
        this.salvarStorage();
        return resposta;
    }
}