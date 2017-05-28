<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Change Your Email Address
$EmailTo = "emailaddress@test.com";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Subject: ";
$Body .= "Contact For You";
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, "Contact For You", $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "failed";
}
 
?>