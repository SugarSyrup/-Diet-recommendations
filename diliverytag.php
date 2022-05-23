<?php
   $conn = mysqli_connect(
     'localhost',
     'nabij',
     'gyeon3542!',
     'nabij');

   $dstorename = $_GET['storename'];
  
   $sql = "SELECT * FROM diliveryinfo WHERE 가게이름 = '$dstorename'" ;
   $result = mysqli_query($conn, $sql);
   $result_data = array();
   
   while($row = mysqli_fetch_array($result)){
        array_push($result_data, array($row['분류1'],$row['분류2'],$row['분류3']));
   }
   
   echo json_encode(array("result"=>$result_data),JSON_UNESCAPED_UNICODE);
?>