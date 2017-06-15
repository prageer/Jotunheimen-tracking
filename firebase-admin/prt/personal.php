<?php

	require '../lib/firebaseLib.php';
	include('../config.php');
	$firebase = new Firebase\FirebaseLib($url, $token);

	$personal = $firebase->get('/personal');		
	$personal = json_decode($personal, true);

	function g_file_download( $filePath ){
		if( preg_match( '[^-a-zA-Z0-9\.]', $filePath ) ){
			$fileName = basename( $filePath );
		}else{
			$fileName = 'download' . basename( $filePath );
		}

		header('Pragma: ');
		header('Cache-Control: cache');
		header('Content-Disposition: attachment; filename="' . $fileName . '"');
		header('Content-Type: application/octet-stream; name="' . $fileName . '"');

		return readfile( $filePath );
	}

	$str = '';
	$str .= '<head>';
	$str .= '	<meta http-equiv=Content-Type content="text/html; charset=utf-8">';
	$str .= '	<style>';
	$str .= '		body { margin:0px; padding:0px; font-weight:normal; font-size:8px; color:black; font-family:WKLChongbong; }';
	$str .= '		table { font-size:11px;  }';
	$str .= '		.bold { font-weight:bold; }';
	$str .= '		.noBorder { border:0px; }';
	$str .= '		.borderTop { border-top:1px solid black; }';
	$str .= '		.borderLeft { border-left:1px solid black; }';
	$str .= '		.borderRight { border-right:1px solid black; }';
	$str .= '		.borderBottom { border-bottom:1px solid black; }';
	$str .= '		.border { border:1px solid black; }';
	$str .= '		.thinBorder { border:thin solid black; }';
	$str .= '		td { text-align:center; }';
	$str .= '	</style>';
	$str .= '</head>';
	$str .= '<body>';

	$_GET["getVal"] = 0;

	$str .= '<table cellspacing="0px" cellpadding="0" border="1">';
	$str .= '	<tr height=25>';
	$str .= '		<th>No</th>';
	$str .= '		<th>Device Id</th>';
	$str .= '		<th>Age</th>';
	$str .= '		<th>HowManyInThePast</th>';
	$str .= '		<th>PostalCode/Other Country</th>';
	$str .= '		<th>Education</th>';
	$str .= '		<th>Gender</th>';
	$str .= '		<th>CurrencyType</th>';
	$str .= '		<th>Tax</th>';
	$str .= '	</tr>';

	$m=1;
	foreach($personal as $key=>$v){
		$str .= '<tr>';
		$str .= '	<td style="text-align: center;">'.$m.'</td>';
		$str .= '	<td>'.$key.'</td>';
		$str .= '	<td>'.$v['iAge'].'</td>';
		$str .= '	<td>'.$v['iHowMany'].'</td>';
		$str .= '	<td>'.$v['iResidence'].'</td>';								
		$str .= '	<td>'.$v['sEducation'].'</td>';
		$str .= '	<td>'.$v['sGender'].'</td>';
		$str .= '	<td>'.$v['sMoneyType'].'</td>';
		$str .= '	<td>'.$v['sTax'].'</td>';
		$str .= '</tr>';

		$m++;	
	}
	$str .= '</table>';

	$d_file_name = 'personal'.'.xls';
	$fp = fopen($d_file_name, 'w');
	fputs($fp, $str);
	fclose($fp);
	g_file_download($d_file_name);
	unlink($d_file_name);
?>