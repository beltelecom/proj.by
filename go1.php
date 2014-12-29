<?php
    include_once ("bd.class.php");
    if(isset($_GET[id])){    $id=$_GET[id];      	}
    if(isset($_GET[education])){    $educ=$_GET[education];      	}
    
    if(isset($educ)) {
        $q = "UPDATE `education` SET `education` = '".$educ."' WHERE `id_user` =".$id;
        $con1 = new DB();
        $res1 = $con1->query($q); 
        if($res1){echo $id;}
    }
    else {echo "не прошло";}