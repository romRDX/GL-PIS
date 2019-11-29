
export class Roteador {

    constructor(
      
    ) {
        
    }

    setController(controller){
        this.controller = controller;
    }

    getRota(){
        return window.location.pathname;
    }

    configurarRotas(){

        let nowPath = this.getRota();

        let id = nowPath.replace( /^\D+/g, '');

        switch(nowPath){

            case '/':{
                return this.rotaHome();
            }

            case '/novo':{
                return this.rotaCadastro();
            }

            case '/alterar':{
                return this.rotaAlterar();
            }

            case '/visualizar':{
                return this.rotaVisualizar();
            }

            case ('/visualizar/'+id) :{
                return this.rotaVisualizarDados();
            }

            case '/visualizar/todos' : {
                return this.rotaVisualizarTodos();
            }

            case '/apagar':{
                return this.rotaApagar();
            }

        }
    }

    rotaHome(){
        console.log('Home...');
        return 'home';
    }

    rotaCadastro(){
        console.log('Cadastrar...');
        return 'cadastro';
    }

    rotaAlterar(){
        console.log('Altear...');
        return 'alterar';
    }

    rotaVisualizar(){
        console.log('Visualizar...');
        return 'visualizar';
    }

    rotaVisualizarDados(){
        console.log('Visualizar Dados...');
        return 'visualizarDados';
    }

    rotaVisualizarTodos(){
        console.log('Visualizar Dados...');
        return 'visualizarTodos';
    }

    rotaApagar(){
        console.log('Apagar...');
        return 'apagar';
    }

    setarRota(rota){
        window.location.href = rota;
    }
}
