import lataCadastrar from "../templates/lataCadastrar.js";
import lataHome from "../templates/lataHome.js";
import lataAlterar from "../templates/lataAlterar.js";
import lataApagar from "../templates/lataApagar.js";
import lataVisualizar from "../templates/lataVisualizar.js";
import lataVisualizarDados from "../templates/lataVisualizarDados.js";
import lataVisualizarTodos from "../templates/lataVisualizarTodos.js";

export class View{
    
    constructor(content, roteador, registro, listar, alterar, remover){
        this.content = content;
        this.roteador = roteador;
        this.registro = registro;
        this.listar = listar;
        this.alterar = alterar;
        this.remover = remover;
    }

    setContent(conteudo){

        switch(conteudo){
            case 'home': {
                this.content.innerHTML = lataHome.render();
                lataHome.afterRender(this.roteador);
                break;
            }

            case 'cadastro': {
                this.content.innerHTML = lataCadastrar.render();
                lataCadastrar.afterRender(this.roteador, this.fazerRegistro.bind(this));
                break;
            }

            case 'alterar': {
                this.content.innerHTML = lataAlterar.render();
                lataAlterar.afterRender(this.roteador, this.fazerAlteracao.bind(this));
                break;
            }

            case 'visualizar': {
                this.content.innerHTML = lataVisualizar.render();
                lataVisualizar.afterRender(this.roteador, this.fazerVisualizacao.bind(this));
                break;
            }

            case 'visualizarDados': {
                this.content.innerHTML = lataVisualizarDados.render();
                lataVisualizarDados.afterRender(this.roteador, this.fazerVisualizacao.bind(this));
                break;
            }

            case 'visualizarTodos': {
                this.content.innerHTML = lataVisualizarTodos.render();
                lataVisualizarTodos.afterRender(this.roteador, this.fazerVisualizacao.bind(this));
                break;
            }

            case 'apagar': {
                this.content.innerHTML = lataApagar.render();
                lataApagar.afterRender(this.roteador, this.fazerRemocao.bind(this));
                break;
            }
        }
    
    }

    fazerRegistro(info){
       return this.registro(info);
    }

    fazerAlteracao(info){
        return this.alterar(info);
    }

    fazerRemocao(info){
        return this.remover(info);
    }

    fazerVisualizacao(info){
        let resposta = this.listar(info);

        return resposta;
    }

    fazerListagemDados(conteudo){
        this.roteador.setarRota('/visualizar/'+conteudo.id);
        // this.setContent('listagemID');
    }

    listagemTodos(conteudo){

    }
}