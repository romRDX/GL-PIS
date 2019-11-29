export class ControladoraVisualizar{

    constructor(roteador, listar){
        this.roteador = roteador;
        this.listar = listar;
    }

    configurar(){
        $(document).on('click','#goHome', this.goHome.bind(this));
        $(document).on('click','#listarLata', this.listarId.bind(this));
        $(document).on('click','#listarLataTodos', this.listarTodos.bind(this));
        
    }

    goHome(){
        this.roteador.setarRota('/');
    }

    listarTodos(){
        this.roteador.setarRota('/visualizar/todos');
    }

    listarId(){
        let id = $('#lata-id').val();
        this.roteador.setarRota('/visualizar/'+id);
    }

    tratarErro(erro){
        this.notificar('limpar');
        this.notificar(erro);
    }

    notificar(texto){
        if(texto == 'limpar'){
            $('#notificacao').html('');
        } else {
            $('#notificacao').addClass('aparecer');
            $('#notificacao').append(texto);
        }
    }

}