<?php

require_once 'colecaoLatas.php';

class Model implements ColecaoLatas {

    function __construct(){
        try {
            $this->pdo = new PDO('mysql:host=localhost;dbname=latascefet;','root','rootroot',
            [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ]);
        } catch (PDOException $e){
            die('erro de conexao '. $e->getMessage());
        }
    }

    function visualizarID($id){
        try {
        $sql = 'SELECT * FROM latas WHERE id = :cod';
        $ps = $this->pdo->prepare($sql);
        $ps->execute([
            'cod' => $id
        ]);
        } catch ( PDOException $e ) {
            //
        }
        
        $texto  = $ps->fetchAll();

        return $texto;

    }

    function visualizarTodos(){
        try {
        $sql = 'SELECT * FROM latas';
        $ps = $this->pdo->prepare($sql);
        $ps->execute();
        } catch ( PDOException $e ) {
            //
        }
        
        $texto  = $ps->fetchAll();

        return $texto;
    }

    function cadastrar($corpo){
        $sql = 'INSERT INTO latas (nome, fabricante, tipo, pais, mililitros, compradoEm, valor) VALUES ( :nome, :fabricante, :tipo, :pais, :mililitros, :compradoEm, :valor)';

        try {
        $ps = $this->pdo->prepare($sql);
        $resposta = $ps->execute([
            'nome' => $corpo['nome'],
            'fabricante' => $corpo['fabricante'],
            'tipo' => $corpo['tipo'],
            'pais' => $corpo['pais'],
            'mililitros' => $corpo['mililitros'],
            'compradoEm' => $corpo['compradoEm'],
            'valor' => $corpo['valor']
        ]);
        } catch ( PDOException $e ) {
            //
        }
        if($resposta){
            return $this->pdo->lastInsertId();
        }
    }

    function alterar($corpo){
       
       $sql = 'UPDATE latas SET ';

       $info = [];

       $info['id'] = $corpo['id'];
        
        if(array_key_exists('nome', $corpo)){
            $sql = $sql.'nome = :nome';
            $info['nome'] = $corpo['nome'];
        }

        if(array_key_exists('fabricante', $corpo)){
            $sql = $sql.', fabricante = :fabricante';
            $info['fabricante'] = $corpo['fabricante'];
        }

        if(array_key_exists('tipo', $corpo)){
            $sql = $sql.', tipo = :tipo';
            $info['tipo'] = $corpo['tipo'];
        }

        if(array_key_exists('pais', $corpo)){
            $sql = $sql.', pais = :pais';
            $info['pais'] = $corpo['pais'];
        }

        if(array_key_exists('mililitros', $corpo)){
            $sql = $sql.', mililitros = :mililitros';
            $info['mililitros'] = $corpo['mililitros'];
        }

        if(array_key_exists('compradoEm', $corpo)){
            $sql = $sql.', compradoEm = :compradoEm';
            $info['compradoEm'] = $corpo['compradoEm'];
        }

        if(array_key_exists('valor', $corpo)){
            $sql = $sql.', valor = :valor';
            $info['valor'] = $corpo['valor'];
        }

        $sql = $sql.' WHERE id = :id';
      
        try {
            $ps = $this->pdo->prepare( $sql );
            $resp = $ps->execute($info);
        } catch ( PDOException $e ) {
            //
        }

        if($resp){
            return [
                'resposta' => $resp,
                'id' => $corpo['id']
            ];
        }
    }

    function remover($id){

        $sql = 'DELETE FROM latas WHERE id = :id';
        try {
            $ps = $this->pdo->prepare( $sql );
            $resposta = $ps->execute( [ 'id' => $id ] );
        } catch ( PDOException $e ) {
            //
        }  

        if($resposta){
            return [
                'resposta' => $resposta,
                'id' => $id
            ];
        }
    }
}

?>