
import { Controller } from './base/controller.js';

window.addEventListener( 'load', function load() {

    let conteudo = document.getElementById( 'content' );
    
    let controller = new Controller(conteudo);

    controller.init();

} );