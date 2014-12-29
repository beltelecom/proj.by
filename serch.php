<?php
	include_once ("bd.class.php");
    $con = new DB();
    
    $res = $con->query("SELECT * FROM user ");
   // $str1=array();
     if ($res){
        $i=0;
        while($myrowm = mysql_fetch_array($res)) {
                                                $str[$myrowm['id']]=$myrowm['name']; $str1[$i]=$str;
                                                $i++;}
         echo json_encode($str);
    }
?>