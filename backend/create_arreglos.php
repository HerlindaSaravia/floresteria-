<?php 
require_once('includes/arreglos.php');

if($_SERVER['REQUEST_METHOD']== 'POST' 
&& isset($_POST['nombre'])&& 
   isset($_POST['color']) && 
   isset($_POST['tipo']) && 
   isset($_POST['precio'])){
    arreglos::create_arreglos($_POST['nombre'], $_POST['color'], $_POST['tipo'], $_POST['precio']);

}else {
    echo 'No se encontraron todos los datos necesarios';
}



?>