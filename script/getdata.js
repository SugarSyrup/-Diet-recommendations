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
        store_info_MenuCharge.setAttribute('value', datas[i].price);
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
        store_info_DiliveryCharge.setAttribute('value', datas[i].diliveryCharge);
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

        var store_info_cal = document.createElement('span');
        store_info_cal.className = "store-info__cal display-none";
        store_info_cal.innerHTML = datas[i].cal;
        store_info.appendChild(store_info_cal);

        store_info.addEventListener('click', function(event){
            if(event.target.parentNode.className == "store-info-charge"){
                SendValue(event.target.parentNode.parentNode.childNodes);
                location.href='storeinfo.html';
             }
             else if(event.target.parentNode.className == "store-info-tags"){
                SendValue(event.target.parentNode.parentNode.childNodes);
                location.href='storeinfo.html';
             }
             else if(event.target.className != "store-info"){
                SendValue(event.target.parentNode.childNodes);
                location.href='storeinfo.html';
             }
             else{
                SendValue(event.target.childNodes);
                location.href='storeinfo.html';
             }
        })
        storelistsection.appendChild(store_info);
    }
    
});

function SendValue(target){
    var tmp = {};
    tmp['가게이름'] = target[0].textContent;
    tmp['메뉴'] = target[1].textContent;
    tmp['음식가격'] = target[2].childNodes[0].attributes.value.value;
    tmp['최소주문금액'] = target[2].childNodes[1].textContent;
    tmp['배달비'] = target[2].childNodes[2].attributes.value.value;
    tmp['전화번호'] = target[3].textContent;
    tmp['주소'] = target[4].textContent;
    tmp['배달'] = [target[5].childNodes[0].textContent,target[5].childNodes[1].textContent,target[5].childNodes[2].textContent];
    tmp['열량'] = target[6].textContent;
    
    
    localStorage.setItem("store-info", JSON.stringify(tmp));    
}

/* range value */
document.querySelector('.rangeInput').addEventListener('input',function(event){
    document.querySelector('.range-value__accent').innerText = (event.target.value*3000).toLocaleString('ko-KR');
    refreshList(parseInt(event.target.value * 3000));

    /* input color */
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
});

var MenuChargelist = document.getElementsByClassName('store-info__MenuCharge');
function refreshList(targetprice){
    for(var i = 0; i < MenuChargelist.length; i++){ 
        if(parseInt(MenuChargelist[i].attributes.value.value) > targetprice) {
            MenuChargelist[i].parentNode.parentNode.style.display = "none";
        }
        else{
            if(MenuChargelist[i].parentNode.parentNode.className != "store-info abs-none"){
                MenuChargelist[i].parentNode.parentNode.style.display = "flex";
            }
        }
    }    
}


// menu-btn event
var menu = document.querySelector("#menu-btn");
var navbar =document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    
    navbar.classList.toggle('active');
    if(navbar.className == "charge-section navbar active"){
        navbar.style.display = "flex";
    }
    else{
        navbar.style.display = "none";
    }
}


/* backbutton */
document.querySelector('.backbutton').addEventListener('click',function (event){
    if(Seperate == 'normal'){
        location.href="result.html";
    }
    else{
        location.href="home.html";
    }
})

document.querySelector('.backbutton').addEventListener('touchstart',function (event){
    if(Seperate == 'normal'){
        location.href="result.html";
    }
    else{
        location.href="home.html";
    }
})