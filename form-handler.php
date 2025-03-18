<?php
$name=$_POST['name'];
$visitor_phone=$_POST['phone'];
$visitor_email=$_POST['email'];
$message=$_POST['message'];

$email_from='info@MotorMaster.com';
$email_subject='New Form Submission';
$email_body ="User Name: $name.\n".
"User Phone: $visitor_phone.\n".
"User Email: $visitor_email.\n".
"User message: $message.\n".

$to = 'domavika48@gmail.com';
$headers ="From: $email_from \r\n";
$headers .= "Reply-To: $visitor_from \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");
?>