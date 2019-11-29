import { View } from './view.js';
import { Model } from './model.js';
import { Roteador } from './roteador.js';

export class Controller{

    constructor(content){
        this.content = content;

        
        this.model = new Model();
        this.roteador = new Roteador();
        this.view = new View(
            this.content,
            this.roteador,
            this.fazerRegistro.bind(this),
            this.fazerListagem.bind(this),
            this.fazerAlteracao.bind(this),
            this.fazerRemocao.bind(this)
        );
    }

    init(){
        console.log('inicializando...');
        this.rotear();
    
    }

    rotear(){
        let rotaAtual = this.roteador.configurarRotas();
        this.viewSetContent(rotaAtual);
    }

    viewSetContent(content){
        this.view.setContent(content);
    }

    fazerRemocao(info){
        return this.model.fazerRemocao(info);
    }

    fazerRegistro(info){
        
        let erro = this.validarInfo(info);

        if ( erro.length > 0){
            return erro;
        } else {
            return this.model.fazerRegistro(info);
        }
    }

    fazerListagem(info){
        return this.model.fazerVisualizacao(info);
    }

    fazerAlteracao(info){
        return this.model.fazerAlteracao(info);
    }

    validarInfo(info){
        
        let nomeTamanhoValido = info.nome.length > 1 ?  info.nome.length < 51 ? true: false : false;
        let fabricanteTamanhoValido = info.fabricante.length > 1 ?  info.fabricante.length < 61 ? true: false : false;
        let paisTamanhoValido = info.pais.length > 1 ?  info.pais.length < 101 ? true: false : false;

        let erro = [];
        
        if ( !nomeTamanhoValido ) {
                erro.push('nome');
        }

        if ( !fabricanteTamanhoValido ) {
            erro.push('fabricante');
        }

        if ( !paisTamanhoValido ) {
            erro.push('pais');
        }

        if(!info.tipo){
            erro.push('tipo');
        }

        if(!info.mililitros){
            erro.push('mililitros');
        }

        if(!info.compradoEm){
            erro.push('compradoEm');
        }

        if(!info.valor || isNaN(info.valor)){
            erro.push('valor');
        }

        return erro;
    }

}