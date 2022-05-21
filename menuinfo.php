<?php
   $conn = mysqli_connect(
     'localhost',
     'nabij',
     'gyeon3542!',
     'nabij');

   $astorename = $_GET['storename'];
   $astoremenu = $_GET['storemenu'];
  
   $sql = "SELECT * FROM menuinfo WHERE 가게이름 = '$astorename' AND 메뉴='$astoremenu'" ;
   $result = mysqli_query($conn, $sql);
   $result_data = array();
   
   while($row = mysqli_fetch_array($result)){
        array_push($result_data, array($row['열량'],$row['탄수화물'],$row['단백질'],$row['지방']));
   }
   
   echo json_encode(array("result"=>$result_data),JSON_UNESCAPED_UNICODE);
?>