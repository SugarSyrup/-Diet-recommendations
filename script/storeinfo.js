var storeinfo = JSON.parse(localStorage.getItem("store-info"));

document.querySelector('.store-header__txt').innerHTML = storeinfo.가게이름;
document.querySelector('.store-info-place__txt').innerHTML = storeinfo.주소;

if(storeinfo.배달비 == '-1'){
    document.querySelector('.store-info-charge__Dtxt').innerHTML = "배달 X" ;
    document.querySelector('.store-info-charge__Ltxt').parentElement.style.display = 'none';
} else {
    document.querySelector('.store-info-charge__Dtxt').innerHTML = "배달비 : " + storeinfo.배달비 + "원";
    document.querySelector('.store-info-charge__Ltxt').innerHTML = "최소주문금액 : " + storeinfo.최소주문금액 + "원";
}
document.querySelector('.store-info-number__txt').innerHTML = storeinfo.전화번호;

document.querySelector('.select-menu-section-txt__name').innerHTML = storeinfo.메뉴;
document.querySelector('.select-menu-section-txt__price').innerHTML = storeinfo.음식가격 + "원";

var tags = document.querySelector('.select-menu-section-tags');
storeinfo.분류.forEach(element => {
    if(ele != ""){
        var ele = document.createElement('span');
        ele.innerHTML = element;
        ele.className = "select-menu-section-tag menu-section-tag";
        tags.appendChild(ele);
    }
});

/* tag 길이 정리 */
var tags = document.getElementsByClassName('select-menu-section-tag');

for(var i = 0; i < tags.length; i++){
    if(tags[i].innerHTML == ''){
        tags[i].style.display = 'none';
    }

    else if(tags[i].innerHTML == '탄수화물'){
        tags[i].style.width = '4rem';
    }
    else if(tags[i].innerHTML == '지방'){
        tags[i].style.width = '2rem';
    }
    else if(tags[i].innerHTML == '비타민 무기질'){
        tags[i].style.width = '5rem';
    }
}





document.getElementById('php_code').innerHTML = "<?php php_func('"+ storeinfo.가게이름 +"'); ?>";

function getstore(pStoreInfo){
    console.log(pStoreInfo);
}