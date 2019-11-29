import { ControladoraNovo } from '../base/pageController/controladoraNovo.js';

let lataForm = {

    render() {
        return `
            <div>
                <button id="goHome"> Home </button>
            </div>
            <div id="form">
                <input id="lata-id" type="hidden" />
                <label for="lata-nome" >Nome:</label>
                <input id="lata-nome" minlength="2" maxlength="50" />
                <label for="lata-fabricante" >Fabricante:</label>
                <input id="lata-fabricante" minlength="2" maxlength="60" />
                <label for="lata-tipo" >tipo:</label>
                <input id="lata-tipo"  />
                <label for="lata-pais" >Pais:</label>
                <input id="lata-pais" minlength="2" maxlength="100" />
                <label for="lata-mililitros" >Mililitros:</label>
                <input id="lata-mililitros"  />
                <label for="lata-compradoem" >Comprado em:</label>
                <input id="lata-compradoEm"  />
                <label for="lata-valor" >Valor:</label>
                <input id="lata-valor" />
                <button class="lata_btn" id="cadastrarLata" >Cadastrar</button>
            </div>
            <div id="notificacao">
            </div>
        `;
    },
        
    afterRender( roteador, evento ) {

        let ctrlNovo = new ControladoraNovo(roteador,evento);


        ctrlNovo.configurar();
    }
        
};
        
export default lataForm;