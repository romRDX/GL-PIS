<?php

interface ColecaoLatas {

    function visualizarID($id);

    function visualizarTodos();

    function cadastrar($corpo);

    function alterar($corpo);

    function remover($id);
}
?>