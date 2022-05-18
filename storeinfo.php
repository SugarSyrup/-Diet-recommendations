<?php
   $conn = mysqli_connect(
     'localhost',
     'nabij',
     'gyeon3542!',
     'nabij');

   $astorename = $_GET['storename'];
  
   //echo($astorename);
   $sql = "SELECT * FROM storeinfo WHERE 가게이름 = '$astorename'";

  //$sql = 'SELECT * FROM storeinfo';
   //echo ($sql);
   $result = mysqli_query($conn, $sql);
   //echo($result);
  
   $result_data = array();
   while($row = mysqli_fetch_array($result)){
     array_push($result_data, array(
       'storename'=>$row['가게이름'],
       'menu'=>$row['메뉴'],
       'price'=>$row['음식가격'],
       'tag' => array($row['분류1'],$row['분류2'],$row['분류3']),
      ));
   }

   echo json_encode(array("result"=>$result_data),JSON_UNESCAPED_UNICODE);
?>



<!-- 
// $index = $_GET['index'];

// $desc = ['Best Friend', 'Favorite Language', 'Best Musician'];
// $name = ['Aram Kim', 'Python', 'IU'];

// $json = json_encode(array('desc' => $desc[$index], 'name' => $name[$index]));

// echo($json); -->