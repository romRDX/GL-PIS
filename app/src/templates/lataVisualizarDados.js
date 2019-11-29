import { ControladoraVisualizarDados } from '../base/pageController/controladoraVisualizarDados.js';

let lataListar = {

    render() {
        return `
        <div>
            <button id="goHome"> Home </button>
            <button id="goBackVisu"> Voltar </button>
        </div>
        <div id="visuID">
            <h3> Cadastro </h3>

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
        let ctrlVisualizarDados = new ControladoraVisualizarDados(roteador, evento);

        ctrlVisualizarDados.configurar();
    }

};

export default lataListar;