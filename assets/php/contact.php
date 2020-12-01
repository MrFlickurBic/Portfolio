<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'osintsev.2000@inbox.ru';
	$subject = 'Site Contact Form';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Готово';
    }
	else{
		$res['message'] = 'Ух ну и ~волны~ сегодня. Что-то пошло не так :( Напишите мне osintsev.2000@inbox.ru.';
	}
	
	
	echo json_encode($res);
}

?>