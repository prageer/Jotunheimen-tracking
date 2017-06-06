<?php
session_start();
include('common/connection.php');
if($_SESSION['AdminUser']==""){
			$URL="login.php";
		    ReDirect($URL);
			exit();
}

$TemplateFile="template.php";
$page=$_REQUEST['page'];

require './lib/firebaseLib.php';
$url = 'https://jotunheimen-80f9e.firebaseio.com';
$token = 'LonvcGzKKy90XubS6A9Y2iDkTnHQaF1JA1eLUuK5';
$firebase = new Firebase\FirebaseLib($url, $token);

if (isset($_SESSION['AdminUser'])) {
	switch($page)
	{		
	
	case "records";
		  {
		   
			$Title="Records";

			$records = $firebase->get('/records');		
			$records = json_decode($records, true);

			$MiddleContents["page"]="views/records.php";
			include($TemplateFile);
			break;
	}

	case "logout";
			  {
				session_destroy();
			    $URL="login.php?Msg=Successfully Logout";
			    ReDirect($URL);
			    break;
			  } 
	default:
			{
				$Title="Admin: Dashboard";
				$MiddleContents["page"]="views/home.php";
				include($TemplateFile);
		    }	
	
	
	}
}
else {
	session_destroy();
    $URL="login.php?Msg=Successfully Logout";
    ReDirect($URL);
    exit;	
}
?>