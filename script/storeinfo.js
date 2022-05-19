var storeinfo = JSON.parse(localStorage.getItem("store-info"));

//jquery ajax get DB from php
$.ajax({
    url: "storeinfo.php",
    type: "get",
    data: {
        storename: storeinfo.가게이름,
    }
}).done(function(data) {
    //console.log(data);
   var datas = JSON.parse(data);
   datas.result.forEach(element => {
       // $lsection = $('<section class="other-menu-section-txt menu-section-txt"></section>');
       // $lsectionTags = $('<section class="other-menu-section-tags menu-section-tags"></section>');
       // $lsecton.append($('<span class="other-menu-section-txt__name menu-section__name">${element.storename}</span>'));
       // $lsectionTags.append()
       if(element.menu == document.querySelector('.select-menu-section-txt__name').innerHTML){

       }
       else{
        var infoSection = document.createElement('section');
       infoSection.className = "other-menu-section-info menu-section-info";
       var txtSection = document.createElement('section');
       txtSection.className = "other-menu-section-txt menu-section-txt";

       var txtName = document.createElement('span');
       txtName.className = "other-menu-section-txt__name menu-section__name";
       txtName.innerHTML = element.menu;
       txtSection.appendChild(txtName);

       var txtTags = document.createElement('section');
       txtTags.className = "other-menu-section-tags menu-section-tags";
       element.tag.forEach(element => {
           if(element != ""){
               var txtTag = document.createElement('span');
               txtTag.innerHTML = element;
               txtTag.className = "other-menu-section-tag menu-section-tag";
               if(element == '탄수화물'){
                txtTag.style.width = '4rem';
               }
               else if(element == '지방'){
                txtTag.style.width = '2rem';
               }
               else if(element == '비타민 무기질'){
                txtTag.style.width = '5rem';
               }

               txtTags.appendChild(txtTag);
           }
           
       });
       var NutritionFacts = document.createElement('span');
        NutritionFacts.innerHTML = "영양정보";
        NutritionFacts.className = "other-menu-section-tag_Nutrition menu-section-tag_Nutrition menu-section-tag";
        txtTags.appendChild(NutritionFacts);

       var txtPrice = document.createElement('span');
       txtPrice.className = "other-menu-section-txt__price menu-section__price";
       txtPrice.innerHTML = element.price + "원";
       console.log(element.storename);
       console.log(element.menu);
       console.log(element.price);
       console.log(element.tag);
       console.log("---");
       txtSection.appendChild(txtPrice);

       infoSection.appendChild(txtSection);
       infoSection.appendChild(txtTags);
       
       document.querySelector('.other-menu-section-infos').appendChild(infoSection);
       }

       
   })
});



// var index = 0;

//         $.ajax({
//             url: "storeinfo.php",
//             type: "get",
//             data: {index: index++}
//         }).done(function(data) {
//             data = JSON.parse(data);
//             console.log('저의' + data.desc + '은 ' + data.name + '입니다!');
//         });
   
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
    if(element != ""){
        var ele = document.createElement('span');
        ele.innerHTML = element;
        ele.className = "select-menu-section-tag menu-section-tag";
        tags.appendChild(ele);
    }
});
var NutritionFacts = document.createElement('span');
NutritionFacts.innerHTML = "영양정보";
NutritionFacts.className = "select-menu-section-tag_Nutrition menu-section-tag_Nutrition menu-section-tag";
tags.appendChild(NutritionFacts);



/* tag 길이 정리 */
var retags = document.getElementsByClassName('menu-section-tag');

for(var i = 0; i < retags.length; i++){
    console.log(retags[i]);
    if(retags[i].innerHTML == ''){
        retags[i].style.display = 'none';
    }
    else if(retags[i].innerHTML == '탄수화물'){
        retags[i].style.width = '4rem';
    }
    else if(retags[i].innerHTML == '지방'){
        retags[i].style.width = '2rem';
    }
    else if(retags[i].innerHTML == '비타민 무기질'){
        retags[i].style.width = '5rem';
    }
}


//header 길이 길면 조정
var headerTxt = document.querySelector('.store-header__txt');
if(headerTxt.innerHTML.length >= 9){
    headerTxt.style.fontSize="25px";
} else if(headerTxt.innerHTML.length >= 12){
    headerTxt.style.fontSize="23px";
} else if(headerTxt.innerHTML.length >= 15){
    headerTxt.style.fontSize="18px";
} else if(headerTxt.innerHTML.length >= 17){
    headerTxt.style.fontSize="15px";
}

var NutritionFactsSelect = document.querySelector(".select-menu-section-tag_Nutrition");
NutritionFactsSelect.addEventListener('click', function(event){
    
})