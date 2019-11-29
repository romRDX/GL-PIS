export class ControladoraApagar{

    constructor(roteador, remover){
        this.roteador = roteador;
        this.remover = remover;
    }

    configurar(){
        $(document).on('click','#goHome', this.goHome.bind(this));
        $(document).on('click','#apagarLata', this.fazerRemocao.bind(this));
        
    }

    goHome(){
        this.roteador.setarRota('/');
    }

    fazerRemocao(){
        let id = $('#lata-id').val();

        let resposta = this.remover({ "id": id});

        if(resposta == 'sucesso'){
            this.cadastroSucesso();
        } else { 
            this.cadastroErro(resposta);
        }
    }

    notificar(texto){
        if(texto == 'limpar'){
            $('#notificacao').html('');
        } else {
            $('#notificacao').addClass('aparecer');
            $('#notificacao').append(texto);
        }
    }

    cadastroSucesso(){
        this.notificar('limpar');
        this.notificar('<p class="success" > Registro removido com sucesso</p>');
        this.limparCampos();

        setTimeout(() =>{
            $('#notificacao').removeClass('aparecer');
        }, 6000);

        setTimeout( ()=>{this.notificar('limpar');
        }, 6650);
    }

    limparCampos() {
        $('#form').find('input:text').val('');
    }

    cadastroErro(info){
    
        this.notificar('limpar');
        this.notificar('<p>ERRO: Código não encontrado</p>');
        
    }
}