<?php
	include_once ("bd.class.php");
    $con = new DB();
    $res = $con->query("SELECT * FROM city ");
    // $str1=array();
     if ($res){
        $i=0;
        while($myrowm = mysql_fetch_array($res)) {
                                                $str[$myrowm['id']]=$myrowm['city']; $str1[$i]=$str;
                                                $i++;}
         echo json_encode($str);
    }
?>