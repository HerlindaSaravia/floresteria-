<?php
require_once('includes/arreglos.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    arreglos::get_all_arreglos();
}

?>
