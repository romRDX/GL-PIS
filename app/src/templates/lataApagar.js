import { ControladoraApagar } from '../base/pageController/controladoraApagar.js';

let lataRemover = {

    render() {
        return `
        <div>
            <button id="goHome"> Home </button>
        </div>
        <div id="form">
            <h3> Apagar Cadastro </h3>
            <label for="lata-id" > Código </label>
            <input id="lata-id" />
            <button class="lata_btn" id="apagarLata" >Apagar</button>
        </div>
        <div id="notificacao">
        </div>
        `;
    },

    afterRender( roteador, funcaoRemover ) {
        let ctrlApagar = new ControladoraApagar(roteador, funcaoRemover);

        ctrlApagar.configurar();
    }

};

export default lataRemover;