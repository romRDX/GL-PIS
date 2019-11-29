export class ControladoraHome{

    constructor(roteador){
        this.roteador = roteador;

        this.configurar();
    }

    configurar(){
        $(document).on('click','#lata-create-btn', this.rotaCadastrar.bind(this));
        $(document).on('click','#lata-retrieve-btn', this.rotaVisualizar.bind(this));
        $(document).on('click','#lata-update-btn', this.rotaAlterar.bind(this));
        $(document).on('click','#lata-delete-btn', this.rotaApagar.bind(this));
    }

    rotaCadastrar(){
        this.roteador.setarRota('/novo');
    }

    rotaVisualizar(){
        this.roteador.setarRota('/visualizar');
    }

    rotaAlterar(){
        this.roteador.setarRota('/alterar');
    }

    rotaApagar(){
        this.roteador.setarRota('/apagar');
    }

}