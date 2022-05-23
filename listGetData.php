<?php
   $conn = mysqli_connect(
     'localhost',
     'nabij',
     'gyeon3542!',
     'nabij');

   $site = $_GET['site'];
  
   $sql = "SELECT * FROM $site" ;
   $result = mysqli_query($conn, $sql);
   $result_data = array();
   
   while($row = mysqli_fetch_array($result)){
    array_push($result_data, array(
      'storename'=>$row['가게이름'],
      'menu'=>$row['메뉴'],
      'price'=>$row['가격'],
      'tags' => array($row['분류1'],$row['분류2'],$row['분류3']),
      'number' => $row['전화번호'],
      'address' => $row['주소'],
      'lessDiliveryCharge' => $row['최소주문금액'],
      'diliveryCharge' => $row['배달비'],
     ));
  }
   
   echo json_encode(array("result"=>$result_data),JSON_UNESCAPED_UNICODE);
?>