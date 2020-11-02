<?php
include 'conexion/conection.php';

$name=$_POST['name'];
$password=$_POST['password'];



$consulta = "INSERT INTO $tablaAgenda
    (nombre, apellidos)
    VALUES (:nombre, :apellidos)";
$result = $db->prepare($consulta);
$result->execute([":nombre" => $nombre, ":apellidos" => $apellidos]);


/*if ( $name === "" || $password ==="") {
 echo json_encode("error");
}
else{
	$insert= $conection->prepare("INSERT INTO usuarios SET nombre = ?, contraseña = ?");
	$consult =$insert->execute([$name,$password]);
	$data=$consult->fetch(PDO::FETCH_OBJ);
	echo json_encode('Bienvenido: '.$name);

}*/

 ?>

