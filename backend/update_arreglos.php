<?php
require('includes/arreglos.php');


parse_str(file_get_contents("php://input"), $_PUT);

if ($_SERVER['REQUEST_METHOD'] == 'PUT' 
&& isset($_PUT['nombre']) && isset($_PUT['color']) && isset($_PUT['tipo']) && isset($_PUT['precio']) && isset($_PUT['id'] )) {
    arreglos::update_arreglos($_PUT['id'], $_PUT['nombre'], $_PUT['color'], $_PUT['tipo'], $_PUT['precio']);
} else {
    echo 'No se han proporcionado todos los datos necesarios para la actualización';
}

?>