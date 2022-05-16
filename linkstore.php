<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/header.css?after" />
    <link rel="stylesheet" href="style/linkstore.css?after" />
    <link rel="stylesheet" href="style/linkstore-list.css?after" />
    <title>Document</title>

    <link rel="stylesheet" href="style/home_style.css" />
    <link rel="stylesheet" href="style/header.css" />
    <title>App</title>
    <!-- favicon-awesome -->
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="images/logo/favicon/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="images/logo/favicon//apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="images/logo/favicon//apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="images/logo/favicon//apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="images/logo/favicon//apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="images/logo/favicon//apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="images/logo/favicon//apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="images/logo/favicon//apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="images/logo/favicon//apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="images/logo/favicon//android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/logo/favicon//favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="images/logo/favicon//favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="images/logo/favicon//favicon-16x16.png"
    />
    <link rel="manifest" href="images/logo/favicon//manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="images/logo/favicon//ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />
    <!-- font-awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
  </head>
  <body>
    <header class="header">
      <span class="title">추천 식단</span>
    </header>

    <div id="menu-btn" class="fas fa-bars"></div>
    <section class="charge-section navbar">
      <section class="range-values">
        <span>0</span>
        <span class="range-middle">25,000</span>
        <span>50,000</span>
      </section>
      <input class="rangeInput" id="rangeInput" type="range" min="0" max="10" step="1" />
    </section>

    <section class="store-info-section">
        <?php
          $conn = mysqli_connect(
            'localhost', // 주소
            'nabij',
            'gyeon3542!',
            'nabij'); // 데이터베이스 이름

          $sql = "SELECT * FROM storeinfo order by rand()";
          $result = mysqli_query($conn, $sql);

          while( $jb_row = mysqli_fetch_array( $result ) ) {
            echo
              '<div class="store-info">'
              . '<span class="store-info__Name" id="store-info__Name">'
              . $jb_row[ '가게이름' ]
              . '</span>'
              . '<span class="store-info__Menu" id="store-info__Menu">'
              . $jb_row[ '메뉴' ]
              . '</span>'
              . '<div class="store-info-charge">'
              . '<span class="store-info__MenuCharge" id="store-info__MenuCharge" value="'
              . $jb_row[ '음식가격' ]
              . '"> 음식가격'
              . $jb_row[ '음식가격' ]
              . '원'
              . '</span>'
              . '<span class="store-info__LessDiliveryCharge display-none" id="store-info__LessDiliveryCharge">'
              . $jb_row[ '최소주문금액' ]
              . '</span>'
              . '<span class="store-info__DiliveryCharge" id="store-info__DiliveryCharge" value="'
              . $jb_row[ '배달비' ]
              . '"> 배달비'
              . $jb_row[ '배달비' ]
              . '원'
              . '</span>'
              . '</div>'
              . '<span class="store-info__Number display-none" id="store-info__Number">'
              . $jb_row[ '전화번호' ]
              . '</span>'
              . '<span class="store-info__Address display-none" id="store-info__Address">'
              . $jb_row[ '주소' ]
              . '</span>'
              . '<div class="store-info-tags">'
              . '<span class="store-info__tag" id="store-info__tag1">'
              . $jb_row[ '분류1' ]
              . '</span>'
              . '<span class="store-info__tag" id="store-info__tag2">'
              . $jb_row[ '분류2' ]
              . '</span>'
              . '<span class="store-info__tag" id="store-info__tag3">'
              . $jb_row[ '분류3' ]
              . '</span>'
              . '</div>'
              . '</div>'
            ;
          }
        ?>
    </section>

    <div id="splash-screen">
      <img src="imgaes/logo/logo.png" alt="logo" />
    </div>

    <section class="stores-section"></section>

    <script src="script/store-list.js"></script>
  </body>
</html>
