<?php

require_once 'view.php';


class Controller{

    function __construct(){
        $this->view = new View();
        $this->model = new Model();

    }

    function receberRequisicao($metodo,$corpo){
        
        switch($metodo){

            case 'GET' : {
                $this->metodoGET($corpo);
                break;
            }

            case 'POST' : {
                $this->metodoPOST($corpo);
                break;
            }

            case 'PUT' : {
                $this->metodoPUT($corpo);
                break;
            }

            case 'DELETE' : {
                $this->metodoDELETE($corpo);
                break;
            }
        }
    }

    private function metodoGET($corpo){

        $registro = null;

        if($corpo['id'] == 'todos'){
            $registro = $this->model->visualizarTodos();
        } else {
            $registro = $this->model->visualizarID($corpo['id']);
        }

        $this->view->notificar('Registros encontrados');
        $this->view->visualizar($registro);
    }

    private function metodoPOST($corpo){
        $id["id"] = $this->model->cadastrar($corpo);

        $registro[0] = array_merge($id,$corpo);

        // var_dump($registro);
        $this->view->notificar('Registro criado com sucesso');
        $this->view->visualizar($registro);
    }

    private function metodoPUT($corpo){
        $resposta = $this->model->alterar($corpo);

        if($resposta['resposta']){
            $this->view->notificar('Registro alterado com sucesso');
            $this->metodoGET($resposta);
        }
    }

    private function metodoDELETE($corpo){
        $resposta = $this->model->remover($corpo['id']);

        if($resposta['resposta']){
            $this->view->notificar('Registro '.$resposta['id'].' removido com sucesso'.PHP_EOL);
        }
    }
}

?>