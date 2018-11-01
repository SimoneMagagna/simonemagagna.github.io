<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/src/Exception.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
	
	$name = trim(filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING));
	$email = trim(filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL)); 
	$message = trim(filter_input(INPUT_POST, "message", FILTER_SANITIZE_SPECIAL_CHARS));
	
	if($name == "" || $email == "" || $message == "") {
		$error_message = "Per favore riempi i campi obbligatori: Nome, Email, Messaggio";
		exit;
	}
	
	if($_POST["address"] != "") {
		$error_message = "Sei un robot, ti ho beccato!";
		exit;
	}
	
	if(!PHPMailer::validateAddress($email)) {
		$error_message = "Indirizzo email non valido";
		exit;
	}
	
	if(!isset($error_message)) {
		$email_body = "Name" . $name . "/n";
		$email_body .= "Email" . $email . "/n";
		$email_body .= "Messaggio" . $message . "/n";
		
		$mail = new PHPMailer;
		
		$mail->setFrom('simone.magagna91@gmail.com', $name);
		$mail->addReplyTo($email, $name);
		$mail->addAddress('simone.magagna91@gmail.com', 'Simone Magagna');
		$mail->Subject = 'Message from' . $name;
		$mail->Body = $email_body;
		//if($mail->send()) {
		header("location:thanks.php");
		//} 
	}
	
	$error_message = "Mailer error: " . $mail->ErrorInfo;
	header("location:#contact-me");

}
	
?>