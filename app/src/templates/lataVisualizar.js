import { ControladoraVisualizar } from '../base/pageController/controladoraVisualizar.js';

let lataListar = {

    render() {
        return `
        <div>
            <button id="goHome"> Home </button>
        </div>
        <div id="form">
            <h3> Listar cadastro </h3>
            <p> Insira o código do registro para a busca</p>
            <label for="lata-id" > Código </label>
            <input id="lata-id" />
            <button class="lata_btn" id="listarLata" >Listar</button>
            <h4 style="margin:20px auto 0 auto;">Ou</h4>
            <button  class="lata_btn" id="listarLataTodos" >Listar todos</button>
        </div>
        <div id="notificacao">
        </div>
        `;
    },

    afterRender( roteador, evento ) {
        let ctrlListar = new ControladoraVisualizar(roteador, evento);

        ctrlListar.configurar();
    }

};

export default lataListar;