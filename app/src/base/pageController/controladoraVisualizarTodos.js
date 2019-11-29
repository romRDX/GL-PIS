export class ControladoraVisualizarTodos{

    constructor(roteador, listar){
        this.roteador = roteador;
        this.listar = listar;
    }

    configurar(){
        $(document).on('click','#goHome', this.goHome.bind(this));
        $(document).on('click','#goBackVisu', this.goBackVisu.bind(this));

        this.buscarTodos();
    }

    goHome(){
        this.roteador.setarRota('/');
    }

    goBackVisu(){
        this.roteador.setarRota('/visualizar');
    }

    buscarTodos(){

        let resposta = this.listar('todos');

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