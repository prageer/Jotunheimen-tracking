<?php

	require '../lib/firebaseLib.php';
	include('../config.php');
	$firebase = new Firebase\FirebaseLib($url, $token);

	$survey = $firebase->get('/survey');		
	$survey = json_decode($survey, true);

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
	$str .= '		<th>Date Time</th>';	
	$str .= '		<th>Activity</th>';
	$str .= '		<th>WithWhomConduct</th>';
	$str .= '		<th>LearnNature</th>';
	$str .= '		<th>TogetherWithFamily/Friends</th>';
	$str .= '		<th>Health</th>';
	$str .= '		<th>Inspire</th>';
	$str .= '		<th>Nurture</th>';
	$str .= '		<th>Experience</th>';
	$str .= '		<th>Overall</th>';
	$str .= '		<th>Comment</th>';
	$str .= '		<th>Email</th>';
	$str .= '		<th>TrackNum</th>';	
	$str .= '	</tr>';

	$m=1;
	foreach($survey as $key=>$r){
		foreach($r as $k=>$v){
		
			$dtArr = explode("-", $v['dateTime']);

			$str .= '<tr>';
			$str .= '	<td style="text-align: center;">'.$m.'</td>';
			$str .= '	<td>'.$key.'</td>';
			$str .= '	<td style="text-align: right;">'.date('d.m.Y H:i', $dtArr[0]).'</td>';			
			$str .= '	<td>'.$v['sActivity'].'</td>';
			$str .= '	<td>'.$v['sParticipant'].'</td>';
			$str .= '	<td>'.$v['smLearnNature'].'</td>';
			$str .= '	<td>'.$v['smTogether'].'</td>';
			$str .= '	<td>'.$v['smHealth'].'</td>';
			$str .= '	<td>'.$v['smInspire'].'</td>';
			$str .= '	<td>'.$v['smNurture'].'</td>';
			$str .= '	<td>'.$v['sExperience'].'</td>';
			$str .= '	<td>'.$v['smOverall'].'</td>';
			$str .= '	<td>'.$v['iComment'].'</td>';
			$str .= '	<td>'.$v['iEmail'].'</td>';								
			$str .= '	<td>'.$v['stage'].'</td>';
			$str .= '</tr>';

		$m++;
		}
	
	}
	$str .= '</table>';

	$d_file_name = 'survey'.'.xls';
	$fp = fopen($d_file_name, 'w');
	fputs($fp, $str);
	fclose($fp);
	g_file_download($d_file_name);
	unlink($d_file_name);
?>