export class ControladoraNovo{

    constructor(roteador, cadastrar){
        this.roteador = roteador;
        this.cadastrar = cadastrar;
    }

    configurar(){
        $(document).on('click','#goHome', this.goHome.bind(this));
        $(document).on('click','#cadastrarLata', this.fazerCadastro.bind(this));
        
    }

    goHome(){
        this.roteador.setarRota('/');
    }

    fazerCadastro(e){
        e.preventDefault();
        let nome = $('#lata-nome').val();
        let fabricante = $('#lata-fabricante').val();
        let tipo = $('#lata-tipo').val();
        let pais = $('#lata-pais').val();
        let mililitros = $('#lata-mililitros').val();
        let compradoEm = $('#lata-compradoEm').val();
        let valor = $('#lata-valor').val();
       
        let info = {
            "id": 6,
            "nome": nome,
            "fabricante": fabricante,
            "tipo": tipo,
            "pais": pais,
            "mililitros": mililitros,
            "compradoEm": compradoEm,
            "valor":valor
        }

        let resposta = this.cadastrar(info);

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
        this.notificar('<p class="success" > Cadastro bem sucedido</p>');
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
        this.notificar('<p>Erro ao cadastrar </p>');
        info.forEach(this.tratarErros.bind(this));
    }

    tratarErros(item, index){
        switch(item){
            case 'nome' : {
                this.notificar('<p>Favor preencher o campo NOME correntamente, ele deve ter de 2 à 50 caracteres.</p>');
                break;
            }

            case 'fabricante' : {
                this.notificar('<p>Favor preencher o campo FABRICANTE correntamente, ele deve ter de 2 à 60 caracteres.</p>');
                break;
            }

            case 'pais': {
                this.notificar('<p>Favor preencher o campo PAIS correntamente, ele deve ter de 2 à 100 caracteres.</p>');
                break;
            }

            case 'tipo': {
                this.notificar('<p>Favor preencher o campo TIPO correntamente.</p>');
                break;
            }

            case 'mililitros': {
                this.notificar('<p>Favor preencher o campo MILILITROS correntamente.</p>');
                break;
            }

            case 'compradoEm': {
                this.notificar('<p>Favor preencher o campo COMPRADO EM correntamente.</p>');
                break;
            }
            case 'valor': {
                this.notificar('<p>Favor preencher o campo VALOR correntamente, ele aceita apenas números.</p>');
                break;
            }

            default : {
                // faz nada
                break;
            }
        }

    }
}