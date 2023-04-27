<?php
if(isset($_POST['uVerif'])) {
	if(isset($_POST['uName'])) {
    $visitor_name = filter_var($_POST['uName'], FILTER_SANITIZE_STRING);
    $email_body .= "<div>
                       <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                    </div>";
}

if(isset($_POST['uEmail'])) {
    $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['uEmail']);
    $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    $email_body .= "<div>
                       <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                    </div>";
}
  
if(isset($_POST['uMessage'])) {
    $visitor_message = htmlspecialchars($_POST['uMessage']);
    $email_body .= "<div style='display: flex; flex-direction: row'>
                       <label><b>Visitor Message:</b></label>&nbsp;<div>".$visitor_message."</div>
                    </div>";
}

$email_body .= "</div>";

$recipient = 'support@keywordcatcher.com';
$subject = "Message from ".$visitor_name;
$headers  = 'Content-type: text/html; charset=utf-8';

if(isset($_POST['uVerif'])){
  if(mail($recipient, $subject, $email_body, $headers)) {
    header("Location: /contact?m=s");
    exit();
  } else {
    	header("Location: /contact");
    	exit();
  }
}
}