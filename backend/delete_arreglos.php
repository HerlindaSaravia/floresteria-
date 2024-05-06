<?php 
require_once('includes/arreglos.php');

if($_SERVER['REQUEST_METHOD']== 'DELETE' && isset($_GET['id'])){
    arreglos::delete_arreglos($_GET['id']);
}else{
    echo 'no se envio el id los arreglos';
}

?>