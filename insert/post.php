<?php
 include '../conection.php';
$user = $_POST['user'];
$pass = $_POST['pass']; 

if ($_POST) {
    if (trim($user) === "" || trim($pass)==="") {
    	echo json_encode('error');
    } 
    else {
    $sql = $conexion->prepare("INSERT INTO usuarios SET nombre = ?, contraseña = ?");
    $insertar = $sql->execute([$user, $pass]);
	echo json_encode('ok');
    }
    
}



/* if($user === '' || $pass === ''){
    echo json_encode('error');
} else{
    $insert= $conexion->prepare("INSERT INTO usuarios SET nombre = ?, contraseña = ?");
	$consult =$insert->execute([$name,$pass]);
	$data=$consult->fetch(PDO::FETCH_OBJ);

    echo json_encode('acceso concedido <br>Usuario: '.$user.'<br>Password: '.$pass);
} */