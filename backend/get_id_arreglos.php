<?php
    require('includes/arreglos.php');

    if ($_SERVER['REQUEST_METHOD'] =='GET' && isset($_GET['id'])) {
          
         arreglos::get_id_arreglos($_GET['id']);
        
    }else{
        echo 'Nose envio el Id';
    }


?>