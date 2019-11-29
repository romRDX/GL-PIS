import { ControladoraVisualizarTodos } from '../base/pageController/controladoraVisualizarTodos.js';

let lataListar = {

    render() {
        return `
        <div>
            <button id="goHome"> Home </button>
            <button id="goBackVisu"> Voltar </button>
        </div>
        <div id="visuID">
            <h3> Todos os registros </h3>

            <table id="tabelaLata">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Fabricante</th>
                    <th>Tipo</th>
                    <th>Pais</th>
                    <th>Mililitros</th>
                    <th>Data da compra</th>
                    <th>Valor</th>
                </tr>
            </table>
            
        </div>
        `;
    },

    afterRender( roteador, evento ) {
        let ctrlVisualizarDados = new ControladoraVisualizarTodos(roteador, evento);

        ctrlVisualizarDados.configurar();
    }

};

export default lataListar;