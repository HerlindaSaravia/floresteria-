<?php
    require('Database.php');

    class arreglos{
        public static function create_arreglos($nombre, $color, $tipo, $precio){
            $database = new Database();
            $conn = $database->getConnection();
        
            $stmt = $conn->prepare('INSERT INTO arreglos(nombre, color, tipo, precio) VALUES(:nombre, :color, :tipo, :precio)');
            
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':color', $color);
            $stmt->bindParam(':tipo', $tipo);
            $stmt->bindParam(':precio', $precio);
        
            if ($stmt->execute()) {
                header('HTTP/1.1 201 Created');
                echo json_encode(array("message" => "arreglos creado correctamente."));
            } else {
                header('HTTP/1.1 500 Internal Server Error');
                echo json_encode(array("message" => "Error al crear los arreglos ."));
            }
        }
        
        public static function delete_arreglos($id){
            $database = new Database();
            $conn = $database->getConnection();

            $stmt = $conn->prepare('DELETE FROM arreglos WHERE id=:id');
            $stmt->bindParam(':id', $id);
            
            if ($stmt->execute()) {
                http_response_code(200);
                echo json_encode(array("message" => "Los arreglos se borró exitosamente"));
            } else {
                http_response_code(500);
                echo json_encode(array("message" => "No se pudo borrar los arreglos"));
            }
        }
        


        public static function get_all_arreglos(){
            $database = new Database();
            $conn = $database->getConnection();
        
            $stmt = $conn->prepare('SELECT * FROM arreglos');
        
            if ($stmt->execute()) {
                $result = $stmt->fetchAll();
                header('HTTP/1.1 202 ok');
                echo json_encode($result);
                return json_encode($result);
            } else {
                header('HTTP/1.1 401 fallo');
                echo "Error en el listado";
            }
        }
        public static function get_id_arreglos($id){
            $database = new Database();
            $conn = $database->getConnection();
        
            $stmt = $conn->prepare('SELECT * FROM arreglos WHERE id = :id');
            $stmt->bindParam(':id',$id);
            
        
            if ($stmt->execute()) {
                $result = $stmt->fetchAll();
                header('HTTP/1.1 202 ok');
                echo json_encode($result);
                return json_encode($result);
            } else {
                header('HTTP/1.1 401 fallo');
                echo "Error en el listado";
            }
        }


        public static function update_arreglos($id, $nombre, $color, $tipo, $fprecio){
            $database = new Database();
            $conn = $database->getConnection();
        
            $stmt = $conn->prepare('UPDATE arreglos SET nombre=:nombre, color=:color, tipo=:tipo, precio=:precio WHERE id=:id');
        
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':color', $color);
            $stmt->bindParam(':tipo', $tipo);
            $stmt->bindParam(':precio', $precio);
            $stmt->bindParam(':id', $id);
        
            if ($stmt->execute()) {
                header('HTTP/1.1 201 el arreglos se actualizó correctamente');
                echo json_encode(array("message" => "arreglos actualizado correctamente."));
            } else {
                header('HTTP/1.1 401 el arreglos no se pudo actualizar');
                echo json_encode(array("message" => "No se pudo actualizar los arreglos."));
            }
        }
        
        
    }
?>
