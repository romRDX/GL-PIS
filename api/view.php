<?php

// require_once 'controller.php';
require_once 'index.php';
require_once 'model.php';

class View{

    function __construct(){
    
    }

    function visualizar($registro){
        foreach($registro as $reg){
            echo PHP_EOL;
            echo 'ID: '.$reg["id"].PHP_EOL;
            echo 'NOME: '.$reg["nome"].PHP_EOL;
            echo 'FABRICANTE: '.$reg["fabricante"].PHP_EOL;
            echo 'TIPO: '.$reg["tipo"].PHP_EOL;
            echo 'PAIS: '.$reg["pais"].PHP_EOL;
            echo 'COMPRADO EM: '.$reg["compradoEm"].PHP_EOL;
            echo 'VALOR: '.$reg["valor"].PHP_EOL;
            
        }
        echo PHP_EOL;
    }

    function notificar($msg){
        echo PHP_EOL.$msg.PHP_EOL;
    }

}




?>