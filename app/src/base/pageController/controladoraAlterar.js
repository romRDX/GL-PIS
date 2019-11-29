export class ControladoraAlterar{

    constructor(roteador, alterar){
        this.roteador = roteador;
        this.alterar = alterar;
    }

    configurar(){
        $(document).on('click','#goHome', this.goHome.bind(this));
        $(document).on('click','#alterarLata', this.fazerAlteracao.bind(this));
        
    }

    goHome(){
        this.roteador.setarRota('/');
    }

    fazerAlteracao(e){
        e.preventDefault();
        let id = $('#lata-id').val();
        let nome = $('#lata-nome').val();
        let fabricante = $('#lata-fabricante').val();
        let tipo = $('#lata-tipo').val();
        let pais = $('#lata-pais').val();
        let mililitros = $('#lata-mililitros').val();
        let compradoEm = $('#lata-compradoEm').val();
        let valor = $('#lata-valor').val();
       
        let info = {};

        info.id = id;

        if(nome){
            info.nome = nome;
        }

        if(fabricante){
            info.fabricante = fabricante;
        }

        if(tipo){
            info.tipo = tipo;
        }

        if(pais){
            info.pais = pais;
        }

        if(mililitros){
            info.mililitros = mililitros;
        }

        if(compradoEm){
            info.compradoEm = compradoEm;
        }

        if(valor){
            info.valor = valor;
        }

        let erro = this.alterar(info);

        if(erro){
            this.cadastroSucesso();
        } else {
            this.cadastroErro(erro);
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
        this.notificar('<p class="success" > Registro alterado com sucesso</p>');
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