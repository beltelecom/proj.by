<?php
    include_once ("bd.class.php");
    $n='name'; $i=0;
    $s='city'; $j=0;
    $e='education'; $ii=0;
	if(isset($_POST)){
	   foreach($_POST as $key => $value) {
	      // echo $key." <br> ";
           if(strpos($key,$n)!==false){$name[$i]=$value; $i++;  }
           if(strpos($key,$s)!==false){$citi[$j]=$value;  $j++;  }
           if(strpos($key,$e)!==false){$education[$ii]=$value; $ii++;  }
	   }
      
       $str="SELECT user.id, user.name, education.education, city.city FROM user, education, city WHERE ";
       
       foreach($name as $key => $value){
            foreach($education as $key2 => $value2){
                    foreach($citi as $key1 => $value1){
                       $str1=" or user.id=$value and city.city='$value1' and education.education='$value2'  and user.id=education.id_user and user.id=city.id_user".$str1;
                    }
            }
       }
       $str1=substr($str1,4,strlen($str1));
       $q=$str.$str1;
      // echo $q."<br>";
      
      $con = new DB();
      //$q="SELECT user.id, user.name, education.education, city.city FROM user, education, city Where user.id='1' and city.city='Pskov' and education.education='secondary'  and user.id=education.id_user=city.id_user";
      $res = $con->query($q);
    // $str1=array();
       if ($res){
         $i=0;
         while($myrowm = mysql_fetch_array($res)) { $j=0;
                                                                                                
                                                $str33[$i][$j]=$myrowm['id']; $j++;
                                                $str33[$i][$j]=$myrowm['name']; $j++;
                                                $str33[$i][$j]=$myrowm['education']; $j++;
                                                $str33[$i][$j]=$myrowm['city']; $j++;
                                                
                                                $i++;} 
                                                $str333['success']=true;
                                                $str333['users']=$str33;
         echo json_encode($str333); 
    }
	}
?>