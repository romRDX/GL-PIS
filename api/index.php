<?php
require_once './controller.php';

// $metodo = $_SERVER[ 'REQUEST_METHOD' ];
// $url = $_SERVER[ 'REQUEST_URI' ];


// exemplos de corpo para POST
$corpo1 = ["nome" => "Sprite","fabricante" => "Sprite Group","tipo" =>"Refrigetante","pais" =>"Estados Unidos","mililitros" =>"500ml","compradoEm" =>"2017-10-06","valor" =>7];
$corpo2 = ["nome" => "Chá preto","fabricante" => "Herbalife","tipo" =>"Chá","pais" =>"Japão","mililitros" =>"150ml","compradoEm" =>"2010-07-22","valor" =>7];
$corpo3 = ["nome" => "Sprite","fabricante" => "Sprite Group","tipo" =>"Refrigetante","pais" =>"Estados Unidos","mililitros" =>"500ml","compradoEm" =>"2017-10-06","valor" =>7];

// exemplos de corpo para PUT
$corpo4 = ["id" => 6,"nome" => "Sprite","fabricante" => "Sprite Group","tipo" =>"Refrigetante","pais" =>"Estados Unidos","mililitros" =>"500ml","compradoEm" =>"2017-10-06","valor" =>7];
$corpo5 = ["id" => 6,"nome" => "SpriteY",/*"fabricante" => "Sprite Group",*/"tipo" =>"RefrigetanteY","pais" =>"Austrália",/*"mililitros" =>"500ml",*/"compradoEm" =>"2050-10-06"/*,"valor" =>7*/];
$corpo6 = ["id" => 6,"nome" => "SpriteX","fabricante" => "Sprite GroupX",/*"tipo" =>"Refrigetante","pais" =>"Estados Unidos",*/"mililitros" =>"577ml",/*"compradoEm" =>"2017-10-06",*/"valor" =>7.77];

// exemplos de corpo para GET e DELETE
$corpo7 = ["id" => 2];
$corpo8 = ["id" => 4];
$corpo9 = ["id" => 6];

// corpo para listar todos
$corpo10 = ["id" => 'todos'];

// *mudar esses campos para avaliar os resultados
$corpo = $corpo10;
$metodo = 'GET';


$ctrl = new Controller();
$ctrl->receberRequisicao($metodo, $corpo);

?>