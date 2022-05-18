var storelist = document.getElementsByClassName('store-info');
var MenuChargelist = document.getElementsByClassName('store-info__MenuCharge');
var Diliverylist = document.getElementsByClassName('store-info__DiliveryCharge');
var rangeinput = document.getElementById("rangeInput");
var targetprice;
var ids = ["탄수화물","단백질","지방"];
var getResult = JSON.parse(localStorage.getItem("results"));
console.log(document.getElementsByClassName('store-info-section')[0]);

window.onload = function(){    
    DefaultRefresh();
}


rangeinput.addEventListener('change',function(event){
    targetprice = parseInt(event.target.value * 5000);
    refreshList(targetprice);
})

function refreshList(targetprice){
    for(var i = 0; i < MenuChargelist.length; i++){ 
        if(parseInt(MenuChargelist[i].attributes.value.value) > targetprice) {
            console.log(parseInt(MenuChargelist[i].attributes.value.value) + ">" + targetprice);
            MenuChargelist[i].parentNode.parentNode.style.display = "none";
        }
        else{
            if(MenuChargelist[i].parentNode.parentNode.className != "store-info abs-none"){
                console.log(parseInt(MenuChargelist[i].attributes.value.value) + "<" + targetprice);
                MenuChargelist[i].parentNode.parentNode.style.display = "flex";
            }
        }
    }    
    DefaultRefresh();
}

function SendValue(target){
    var tmp = {};
    tmp['가게이름'] = target[0].textContent;
    tmp['메뉴'] = target[1].textContent;
    tmp['음식가격'] = target[2].childNodes[0].attributes.value.value;
    tmp['최소주문금액'] = target[2].childNodes[1].textContent;
    tmp['배달비'] = target[2].childNodes[2].attributes.value.value;
    tmp['전화번호'] = target[3].textContent;
    tmp['주소'] = target[4].textContent;
    tmp['분류'] = [target[5].childNodes[0].textContent,target[5].childNodes[1].textContent,target[5].childNodes[2].textContent];

    localStorage.setItem("store-info", JSON.stringify(tmp));    
}

function sendPost(url, params) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post'); 
    form.setAttribute('target', '_blank'); 
    form.setAttribute('action', url); 
    document.charset = "UTF-8"; 
    for (var key in params) { 
        var hiddenField = document.createElement('input'); 
        hiddenField.setAttribute('type', 'hidden'); 
        hiddenField.setAttribute('name', key); 
        hiddenField.setAttribute('value', params[key]); 
        form.appendChild(hiddenField); 
    } 
    document.body.appendChild(form); 
    form.submit(); 
}

for(var i = 0; i < storelist.length; i++){ 
     storelist[i].addEventListener('click', function(event){
         if(event.target.parentNode.className == "store-info-charge"){
            SendValue(event.target.parentNode.parentNode.childNodes);
            location.href='storeinfo.php';
         }
         else if(event.target.parentNode.className == "store-info-tags"){
            SendValue(event.target.parentNode.parentNode.childNodes);
            // event.target.parentNode.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
            location.href='storeinfo.php';
         }
         else if(event.target.className != "store-info"){
            SendValue(event.target.parentNode.childNodes);
            // event.target.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
            location.href='storeinfo.php';
         }
         else{
            SendValue(event.target.childNodes);
            // event.target.style.backgroundColor = "rgb(197, 192, 192)";
            location.href='storeinfo.php';
         }
     })

    // Mouse Down & Up
    storelist[i].addEventListener('mousedown', function(event){
        if(event.target.parentNode.className == "store-info-charge"){
            event.target.parentNode.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
        }
        else if(event.target.parentNode.className == "store-info-tags"){
            event.target.parentNode.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
        }
        else if(event.target.className != "store-info"){
            event.target.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
            setTimeout(() => event.target.parentNode.parentNode.style.backgroundColor = "white", 3000);
        }
        else{
            event.target.style.backgroundColor = "rgb(197, 192, 192)";

        }
    })

     storelist[i].addEventListener('mouseup', function(event){
         if(event.target.parentNode.className == "store-info-charge"){
             event.target.parentNode.parentNode.style.backgroundColor = "white";
         }
         else if(event.target.parentNode.className == "store-info-tags"){
             event.target.parentNode.parentNode.style.backgroundColor = "white";
         }
         else if(event.target.className != "store-info"){
             event.target.parentNode.style.backgroundColor = "white";
         }
         else{
             event.target.style.backgroundColor = "white";
         }
     })
}


var tag = document.getElementsByClassName("store-info-tags");
for(var i = 0; i < tag.length ; i++){
    tag[i].childNodes.forEach(function(element){
        if(element.textContent == "비타민 무기질"){
            element.style.width="28%";
        }
        else if(element.textContent == "탄수화물"){
            element.style.width="23%";
        }
    })
};

function DefaultRefresh(){
    var tags = document.getElementsByClassName("store-info-tags");
    var defaulttagflag = false;
    for(var j = 0; j < ids.length; j++){
        for(var i = 0; i < tags.length ; i++){
            console.log(tags[i].parentNode.childNodes[1].textContent);
            tags[i].childNodes.forEach(function(element){
                console.log(i +"]tags : " + element.textContent);
                if(getResult[element.textContent] == "부족"){
                    defaulttagflag = true;
                }
            });
            if(defaulttagflag){
                
            }
            else{
                if(tags[i].parentNode.className == 'store-info abs-none'){

                }
                else{
                    tags[i].parentNode.className += ' abs-none';
                }
            }
            defaulttagflag = false;
        };
    }

     for(var z = 0; z < Diliverylist.length; z++){
         if(Diliverylist[z].attributes.value.value == '-1'){
             console.log(Diliverylist[z].innerHTML);
             Diliverylist[z].innerHTML = '배달 X';

         }
     }
}


var menu = document.querySelector("#menu-btn");
var navbar =document.querySelector('.navbar');

// menu-btn event
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    
    navbar.classList.toggle('active');
    if(navbar.className == "charge-section navbar active"){
        navbar.style.display = "block";
    }
    else{
        navbar.style.display = "none";
    }
}