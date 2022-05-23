var Seperate = localStorage.getItem('site');
var phpname = Seperate;

$.ajax({
    url: "listGetData.php",
    type: "get",
    data: {
        site: phpname,
    }
}).done(function(data) {
    var datas = JSON.parse(data).result;
    for(var i = 0; i<datas.length; i++){
        var storelistsection = document.getElementById('store-info-section');
        var store_info = document.createElement('div');
        store_info.className = 'store-info';

        var store_info_Name = document.createElement('span');
        store_info_Name.className = 'store-info__Name';
        store_info_Name.innerHTML = datas[i].storename;
        store_info.appendChild(store_info_Name);

        var store_info_Menu = document.createElement('span');
        store_info_Menu.className = 'store-info__Menu';
        store_info_Menu.innerHTML = datas[i].menu;
        store_info.appendChild(store_info_Menu);


        var store_info_Charge = document.createElement('div');
        store_info_Charge.className = 'store-info-charge';

        var store_info_MenuCharge = document.createElement('span');
        store_info_MenuCharge.className = 'store-info__MenuCharge';
        store_info_MenuCharge.innerHTML = "음식가격" + datas[i].price +"원";
        store_info_MenuCharge.attributes.value = datas[i].price;
        store_info_Charge.appendChild(store_info_MenuCharge);

        var store_info_LessDiliveryCharge = document.createElement('span');
        store_info_LessDiliveryCharge.className = 'store-info_LessDiliveryCharge display-none';
        store_info_LessDiliveryCharge.innerHTML = datas[i].lessDiliveryCharge;
        store_info_Charge.appendChild(store_info_LessDiliveryCharge);

        var store_info_DiliveryCharge = document.createElement('span');
        store_info_DiliveryCharge.className = 'store-info__DiliveryCharge';
        if(datas[i].diliveryCharge == '-1'){
            store_info_DiliveryCharge.innerHTML = "배달 X";
        }else{
            store_info_DiliveryCharge.innerHTML = "배달비" + datas[i].diliveryCharge + "원";
        }
        store_info_DiliveryCharge.attributes.value = datas[i].diliveryCharge;
        store_info_Charge.appendChild(store_info_DiliveryCharge);
        store_info.appendChild(store_info_Charge)


        var store_info_Numer = document.createElement('span');
        store_info_Numer.className = 'store-info__Number display-none';
        store_info_Numer.innerHTML = datas[i].number;
        store_info.appendChild(store_info_Numer);

        var store_info_Address = document.createElement('span');
        store_info_Address.className = 'store-info__Address display-none';
        store_info_Address.innerHTML = datas[i].address;
        store_info.appendChild(store_info_Address);


        var store_info_tags = document.createElement('div');
        store_info_tags.className = 'store-info-tags display-none';

        var store_info_tag1 = document.createElement('span');
        store_info_tag1.className = 'store-info__tag';
        store_info_tag1.id = 'store-info__tag1';
        store_info_tag1.innerHTML = datas[i].tags[0];
        store_info_tags.appendChild(store_info_tag1);

        var store_info_tag2 = document.createElement('span');
        store_info_tag2.className = 'store-info__tag';
        store_info_tag2.id = 'store-info__tag2';
        store_info_tag2.innerHTML = datas[i].tags[1];
        store_info_tags.appendChild(store_info_tag2);

        var store_info_tag3 = document.createElement('span');
        store_info_tag3.className = 'store-info__tag';
        store_info_tag3.id = 'store-info__tag3';
        store_info_tag3.innerHTML = datas[i].tags[2];
        store_info_tags.appendChild(store_info_tag3);
        store_info.appendChild(store_info_tags);

        storelistsection.appendChild(store_info);
    }
    
});

