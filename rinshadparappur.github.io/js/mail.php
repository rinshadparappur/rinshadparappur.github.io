<?php

$name = $_POST ['name'];
$email = $_POST ['email'];
$subject = $_POST ['subject'];
$message = $_POST ['message'];
$number = $_POST ['number'];

$to = "rinshadurshamnil@gmail.com";
// $subject = "sdddsdsd";
$txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message . "\r\n Subject =" . $subject . "\r\n Number =" . $number;

$headers = "From: rinshadurshamnil@gmail.com" . "\r\n" .
"CC: rinshadurshamnil@gmail.com";

if ($email!=NULL){
    mail($to,$subject,$txt,$headers);
}


header("location:../index.html");
?>

