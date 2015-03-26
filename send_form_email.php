<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@wizlynxgroup.com";
    $email_subject = "New contact request from WizlynxGroup website";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
    // validation expected data exists
  //  if(!isset($_POST['first_name']) ||
  //      !isset($_POST['last_name']) ||
  //      !isset($_POST['email']) ||        
  //      !isset($_POST['message'])) {
  //      died('We are sorry, but there appears to be a problem with the form you submitted.');      
  //  }
 
	$topic = $_POST['topic']; // required
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $country = $_POST['country']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone']; 
    $company = $_POST['company']; 
    $message = $_POST['message']; // required
 
//    $error_message = "";
//    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
//  if(!preg_match($email_exp,$email_from)) {
//    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
//  }
//    $string_exp = "/^[A-Za-z\s.'-]+$/";
//  if(!preg_match($string_exp,$first_name)) {
//    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
//  }
//  if(!preg_match($string_exp,$last_name)) {
//    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
//  }
//  if(strlen($comments) < 2) {
//    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
//  }
//  if(strlen($error_message) > 0) {
//    died($error_message);
//  }
    $email_message = "";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

	$email_message .= "Topic: ".clean_string($topic)."\n";
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
    $email_message .= "Country: ".clean_string($country)."\n";
    $email_message .= "Company: ".clean_string($company)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
// create email headers
// $headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
sleep(2);
//echo "<meta http-equiv='refresh' content=\"0; url=http://wizlynxgroup.com">";
?>
 
<?php
}
?>