var storeinfo = JSON.parse(localStorage.getItem("store-info"));
var site = localStorage.getItem('site');

if(site == 'normal'){
    //jquery ajax get DB from php
    $.ajax({
        url: "storeinfo.php",
        type: "get",
        data: {
            storename: storeinfo.가게이름,
        }
    }).done(function(data) {
    var datas = JSON.parse(data);
    //var datas = datad.slice(0,1);

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
                    txtTag.style.backgroundColor="lightgray";
                }
                else if(element == '지방'){
                    txtTag.style.width = '2rem';
                    txtTag.style.backgroundColor="#FFE283";
                }
                else if(element == '비타민 무기질'){
                    txtTag.style.width = '5rem';
                    txtTag.style.backgroundColor="#A8DBA8";
                }
                else {
                    txtTag.style.backgroundColor="lightpink";
                }

                txtTags.appendChild(txtTag);
            }
            
        });
        var oNutritionFacts = document.createElement('span');
            oNutritionFacts.innerHTML = "영양정보";
            oNutritionFacts.className = "other-menu-section-tag_Nutrition menu-section-tag_Nutrition menu-section-tag";
            txtTags.appendChild(oNutritionFacts);
            oNutritionFacts.addEventListener('click',function(event){
                console.log($(event.target).offset().left);
                console.log($(event.target).offset().top);
                $("#toast").offset({
                    left : $(event.target).offset().left-130,
                    top : $(event.target).offset().top+15
                });

                $.ajax({
                    url: "menuinfo.php",
                    type: "get",
                    data: {
                        storename: storeinfo.가게이름,
                        storemenu: element.menu,
                    }
                }).done(function(odata) {
                    while(document.querySelector('.td')){
                    document.querySelector('.td').remove();
                    }
                    var odatas = JSON.parse(odata);
                    var odatad = odatas.result[0];
                    for(var g = 0; g<odatad.length; g++){
                        var tr = document.querySelector('.tr');
                        var td = document.createElement('td');
                        console.log('Nutrition Facts');
                        console.log(parseFloat(odatad[g]).toFixed(2) == "-1.00");
                        if(parseFloat(odatad[g]).toFixed(2) == "-1.00"){
                            td.innerText = "-";    
                        }
                        else{
                            td.innerText = parseFloat(odatad[g]).toFixed(2);
                        }
                        td.className = 'td';
                        tr.appendChild(td);
                    }
                    var table = document.querySelector('table');
                    table.appendChild(tr);
                });
                toast();
            });

        var txtPrice = document.createElement('span');
        txtPrice.className = "other-menu-section-txt__price menu-section__price";
        txtPrice.innerHTML = element.price + "원";
        txtSection.appendChild(txtPrice);

        infoSection.appendChild(txtSection);
        infoSection.appendChild(txtTags);
        
        document.querySelector('.other-menu-section-infos').appendChild(infoSection);
        }

        
    })
    });
}
else{
    $.ajax({
        url: "otherstoreinfo.php",
        type: "get",
        data: {
            site : site,
            storename: storeinfo.가게이름,
        }
    }).done(function(data) {
    var datas = JSON.parse(data);

    datas.result.forEach(element => {
        console.log(element);
        if(element.menu == storeinfo.메뉴){

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
        if(site == 'diet'){
            var cal = document.createElement('span');
            if(element.cal == '-1'){
                cal.innerHTML = "열량 : -";
            }
            else{
                cal.innerHTML = "열량 : " + element.cal;
            }
            
            cal.className = "other-menu-section-tag_Cal menu-section-tag_Cal menu-section-tag ";
            txtTags.appendChild(cal);
        }        
        var txtPrice = document.createElement('span');
        txtPrice.className = "other-menu-section-txt__price menu-section__price";
        txtPrice.innerHTML = element.price + "원";

        txtSection.appendChild(txtPrice);

        infoSection.appendChild(txtSection);
        infoSection.appendChild(txtTags);
        
        document.querySelector('.other-menu-section-infos').appendChild(infoSection);
        }

        
    })
    });
}

let removeToast;
function toast() {
    const toast = document.getElementById("toast");

    // if(toast.classList.contains("reveal")){
    //     (clearTimeout(removeToast), removeToast = setTimeout(function () {
    //         document.getElementById("toast").classList.remove("reveal")
    //     }, 5000)) } else{
    //     removeToast = setTimeout(function () {
    //         document.getElementById("toast").classList.remove("reveal")
    //     }, 5000)
    // }
    toast.classList.add("reveal")
}

document.addEventListener('touchstart',function(event){
    if(event.target.innerHTML == "영양정보"){
        console.log('if');
    }else{
        console.log('else');
        if(document.getElementById("toast").className == 'reveal'){
            document.getElementById("toast").classList.remove("reveal");
        }
    }
})

document.addEventListener('click',function(event){
    if(event.target.innerHTML == "영양정보"){
        console.log('if');
    }else{
        console.log('else');
        if(document.getElementById("toast").className == 'reveal'){
            document.getElementById("toast").classList.remove("reveal");
        }
    }
})
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

/*Dilivery Section*/
if(storeinfo.배달비 == '-1'){
    document.querySelector('.store-info-charge__Dtxt').innerHTML = "배달 X" ;
    document.querySelector('.store-info-charge__Ltxt').parentElement.style.display = 'none';
} else {
    document.querySelector('.store-info-charge__Dtxt').innerHTML = "배달비 : " + storeinfo.배달비 + "원";
    document.querySelector('.store-info-charge__Ltxt').innerHTML = "최소주문금액 : " + storeinfo.최소주문금액 + "원";
}

if(site == 'normal'){
    /*Call DataBase */
    $.ajax({
        url: "diliverytag.php",
        type: "get",
        data: {
            storename: storeinfo.가게이름,
        }
    }).done(function(data) {
        var datas = JSON.parse(data);
        var diliverySection = document.querySelector('.store-info-charge');
        var diliveryTagSection = document.createElement('section');
        diliveryTagSection.className = "store-info-diliveryTags store-info-section";

        var u = 0;
        datas.result[0].forEach(element => {
            if(element == ""){ u++; }
            else {
                var diliveryTag = document.createElement('span');
                diliveryTag.className = "store-info-diliveryTags_tag diliveryTag" + u;
                u++;
                diliveryTag.innerHTML = element;
                diliveryTagSection.appendChild(diliveryTag);
            }
        })        
        diliverySection.after(diliveryTagSection);
    });
}
else{
    var diliverySection = document.querySelector('.store-info-charge');
    var diliveryTagSection = document.createElement('section');
    diliveryTagSection.className = "store-info-diliveryTags store-info-section";

    var u = 0; 
    storeinfo.배달.forEach(element => {
        if(element == ""){ u++; }
        else {
            var diliveryTag = document.createElement('span');
            diliveryTag.className = "store-info-diliveryTags_tag diliveryTag" + u;
            u++;
            diliveryTag.innerHTML = element;
            diliveryTagSection.appendChild(diliveryTag);
        }
    })
    diliverySection.after(diliveryTagSection);
}


document.querySelector('.store-info-number__txt').innerHTML = storeinfo.전화번호;

document.querySelector('.select-menu-section-txt__name').innerHTML = storeinfo.메뉴;
document.querySelector('.select-menu-section-txt__price').innerHTML = storeinfo.음식가격 + "원";

var tags = document.querySelector('.select-menu-section-tags');
if(site == 'normal'){
    storeinfo.분류.forEach(element => {
        if(element != ""){
            var ele = document.createElement('span');
            ele.innerHTML = element;
            ele.className = "select-menu-section-tag menu-section-tag";
            tags.appendChild(ele);
        }
    });
}

if(site == 'normal'){
    var NutritionFacts = document.createElement('span');
    NutritionFacts.innerHTML = "영양정보";
    NutritionFacts.className = "select-menu-section-tag_Nutrition menu-section-tag_Nutrition menu-section-tag";
    tags.appendChild(NutritionFacts);
    NutritionFacts.addEventListener('click',function(event){
        console.log($(event.target).offset().left);
        console.log($(event.target).offset().top);
        $("#toast").offset({
            left : $(event.target).offset().left-130,
            top : $(event.target).offset().top+15
        });
        if(site == 'normal'){
            $.ajax({
                url: "menuinfo.php",
                type: "get",
                data: {
                    storename: storeinfo.가게이름,
                    storemenu: storeinfo.메뉴,
                }
            }).done(function(odata) {                
                while(document.querySelector('.td')){
                    document.querySelector('.td').remove();
                    }
                var odatas = JSON.parse(odata);
                var odatad = odatas.result[0];
                for(var g = 0; g<odatad.length; g++){
                    var tr = document.querySelector('.tr');
                    var td = document.createElement('td');
                    console.log('Nutrition Facts');
                    console.log(parseFloat(odatad[g]).toFixed(2) == "-1.00");
                    if(parseFloat(odatad[g]).toFixed(2) == "-1.00"){
                        td.innerText = "-";    
                    }
                    else{
                        td.innerText = parseFloat(odatad[g]).toFixed(2);
                    }
                    td.className = 'td';
                    tr.appendChild(td);
                }
                var table = document.querySelector('table');
                table.appendChild(tr);
            });
        }
        else{

        }
        toast();
    });
}
else if(site == 'diet'){
    var cal = document.createElement('span');
    if(storeinfo.열량 == '-1'){
        cal.innerHTML = "열량 : -";
    }
    else{
        cal.innerHTML = "열량 : " + storeinfo.열량;
    }
        
    cal.className = "other-menu-section-tag_Cal menu-section-tag_Cal menu-section-tag ";
    document.querySelector('.select-menu-section-tags').appendChild(cal);
}

/* tag 길이 정리 */
var retags = document.getElementsByClassName('menu-section-tag');

for(var i = 0; i < retags.length; i++){
    console.log(retags[i]);
    if(retags[i].innerHTML == ''){
        retags[i].style.display = 'none';
    }
    else if(retags[i].innerHTML == '탄수화물'){
        retags[i].style.width = '4rem';
        retags[i].style.backgroundColor="lightblue";
    }
    else if(retags[i].innerHTML == '지방'){
        retags[i].style.width = '2rem';
        retags[i].style.backgroundColor="#FFE283";
    }
    else if(retags[i].innerHTML == '비타민 무기질'){
        retags[i].style.width = '5rem';
        retags[i].style.backgroundColor="#A8DBA8";
    }
    else if(retags[i].innerHTML == '단백질'){
        retags[i].style.backgroundColor="lightpink";
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



/* backbutton */
document.querySelector('.backbutton').addEventListener('click',function (event){
    location.href="linkstore.php";
})

document.querySelector('.backbutton').addEventListener('touchstart',function (event){
    location.href="linkstore.php";
})