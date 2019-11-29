import { ControladoraHome } from '../base/pageController/controladoraHome.js';

let lataHome = {

    render() {
        return `
            <h1 class="titulo1" >Bem-vindo(a) a coleção de latas de bebidas CEFET/NF!</h1>
            <br />
            <br />
            <h3>O que deseja fazer ?</h3>
            <div id="box">
                <button id="lata-retrieve-btn" class="box-button" >Visualizar</button>
                <button id="lata-create-btn" class="box-button" >Adicionar</button>
                <br />
                <button id="lata-update-btn" class="box-button" >Alterar </button>
                <button id="lata-delete-btn" class="box-button" >Remover </button>
            </div>
        `;
    },

    afterRender( roteador ) {

        let ctrlHome = new ControladoraHome(roteador);

        ctrlHome.configurar();
    
    }

};

export default lataHome;