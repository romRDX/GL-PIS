export class ControladoraVisualizarDados{

    constructor(roteador, listar){
        this.roteador = roteador;
        this.listar = listar;
    }

    configurar(){
        $(document).on('click','#goHome', this.goHome.bind(this));
        $(document).on('click','#goBackVisu', this.goBackVisu.bind(this));

        this.buscarRegistro();
        
    }

    goHome(){
        this.roteador.setarRota('/');
    }

    goBackVisu(){
        this.roteador.setarRota('/visualizar');
    }

    buscarRegistro(){
        const caminho = this.roteador.getRota();

        const id = /[0-9]+/.exec( caminho );

        let resposta = this.listar(id[0]);

        if(resposta[0] == 'sucesso'){
            this.preencher(resposta[1]);
        } else {
            this.tratarErro(resposta[1]);
        }
    }

    preencher(dados){
        let campos = $('#tabelaLata');

        for(let registro of dados){
            campos.append(`
                <tr>
                    <td>${registro.id}</td>
                    <td>${registro.nome}</td>
                    <td>${registro.fabricante}</td>
                    <td>${registro.tipo}</td>
                    <td>${registro.pais}</td>
                    <td>${registro.mililitros}</td>
                    <td>${registro.compradoEm}</td>
                    <td>${registro.valor}</td>
                </tr>
            `);
        }

    }

    tratarErro(erro){
        alert('ERRO NA REQUISIÇÃO: ',erro);
        this.goBackVisu();
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