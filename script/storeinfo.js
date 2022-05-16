var storeinfo = JSON.parse(localStorage.getItem("store-info"));

document.querySelector('.store-header__txt').innerHTML = storeinfo.가게이름;
document.querySelector('.store-info-place__txt').innerHTML = storeinfo.주소;
document.querySelector('.store-info-charge__Ltxt').innerHTML = "최소주문금액 : " + storeinfo.최소주문금액;
document.querySelector('.store-info-charge__Dtxt').innerHTML = "배달비 : " + storeinfo.배달비;
document.querySelector('.store-info-number__txt').innerHTML = storeinfo.전화번호;

document.querySelector('.select-menu-section-txt__name').innerHTML = storeinfo.메뉴;
document.querySelector('.select-menu-section-txt__price').innerHTML = storeinfo.음식가격 + "원";

var tags = document.querySelector('.select-menu-section-tags');
storeinfo.분류.forEach(element => {
    if(ele != ""){
        var ele = document.createElement('span');
        ele.innerHTML = element;
        ele.className = "select--menu-section-tag menu-section-tag";
        tags.appendChild(ele);
    }
});

