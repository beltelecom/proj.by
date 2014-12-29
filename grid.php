<?php
	include_once ("bd.class.php");
    
    
 if( $_REQUEST['act']=="read"){
    $con = new DB();
    $res = $con->query("SELECT user.id,user.name, education.education, city.city FROM user, education, city WHERE user.id=education.id_user and user.id=city.id_user ");
   // $str1=array();
     if ($res){
        $i=0;
        while($myrowm = mysql_fetch_array($res)) { $j=0;
                                                $str[$i]['id']=$myrowm['id']; $j++;
                                                $str[$i]['name']=$myrowm['name']; $j++;
                                                $str[$i]['education']=$myrowm['education']; $j++;
                                                $str[$i]['city']=$myrowm['city']; $j++;
                                                
                                                $i++;} 
                                                $str1['success']=true;
                                                $str1['users']=$str;
         echo json_encode($str1); 
    }
  }
 else if($_REQUEST['act']=="update") {
    $con1 = new DB();
    $data = json_decode(file_get_contents('php://input'), true);
    $id   = $data['id'];  
    $nane   = $data['name'];
    $city   = $data['city '];
    $education   = $data['education']; //echo $education ;
    $table='education';
    $id_user='id_user';
    $q = "UPDATE `education` SET `education` = '".$education."' WHERE `id_user` =".$id;
    $res1 = $con1->query($q);    
        
 } 
?>