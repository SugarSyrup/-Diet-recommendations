var storelist = document.getElementsByClassName('store-info');
var MenuChargelist = document.getElementsByClassName('store-info__MenuCharge');
var Diliverylist = document.getElementsByClassName('store-info__DiliveryCharge');
var rangeinput = document.getElementById("rangeInput");
var targetprice;
var ids = ["탄수화물","단백질","지방"];
var getResult = JSON.parse(localStorage.getItem("results"));

var Seperate = localStorage.getItem('site');

window.onload = function(){    
    if(Seperate == 'normal'){
        DefaultRefresh();
    }
}
    
    // Mouse Down & Up
    // storelist[i].addEventListener('mousedown', function(event){
    //     if(event.target.parentNode.className == "store-info-charge"){
    //         event.target.parentNode.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
    //     }
    //     else if(event.target.parentNode.className == "store-info-tags"){
    //         event.target.parentNode.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
    //     }
    //     else if(event.target.className != "store-info"){
    //         event.target.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
    //         setTimeout(() => event.target.parentNode.parentNode.style.backgroundColor = "white", 3000);
    //     }
    //     else{
    //         event.target.style.backgroundColor = "rgb(197, 192, 192)";

    //     }
    // })

    //  storelist[i].addEventListener('mouseup', function(event){
    //      if(event.target.parentNode.className == "store-info-charge"){
    //          event.target.parentNode.parentNode.style.backgroundColor = "white";
    //      }
    //      else if(event.target.parentNode.className == "store-info-tags"){
    //          event.target.parentNode.parentNode.style.backgroundColor = "white";
    //      }
    //      else if(event.target.className != "store-info"){
    //          event.target.parentNode.style.backgroundColor = "white";
    //      }
    //      else{
    //          event.target.style.backgroundColor = "white";
    //      }
    //  })

console.log(storelist);
console.log(storelist.length);
//storelist.forEach(element=>{
for(var q = 0; q < 17; q++){ 
    console.log(q);
    console.log(storelist[q]);
    storelist[q].addEventListener('click', function(event){
        if(event.target.parentNode.className == "store-info-charge"){
           SendValue(event.target.parentNode.parentNode.childNodes);
           location.href='storeinfo.html';
        }
        else if(event.target.parentNode.className == "store-info-tags"){
           SendValue(event.target.parentNode.parentNode.childNodes);
           // event.target.parentNode.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
           location.href='storeinfo.html';
        }
        else if(event.target.className != "store-info"){
           SendValue(event.target.parentNode.childNodes);
           // event.target.parentNode.style.backgroundColor = "rgb(197, 192, 192)";
           location.href='storeinfo.html';
        }
        else{
           SendValue(event.target.childNodes);
           // event.target.style.backgroundColor = "rgb(197, 192, 192)";
           location.href='storeinfo.html';
        }
    })
}


rangeinput.addEventListener('change',function(event){
    targetprice = parseInt(event.target.value * 3000);
    refreshList(targetprice);
})

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


var tag = document.getElementsByClassName("store-info-tags");
for(var i = 0; i < tag.length ; i++){
    tag[i].childNodes.forEach(function(element){
        if(element.textContent == "비타민 무기질"){
            element.style.width="28%";
            element.style.backgroundColor="#A8DBA8";
        }
        else if(element.textContent == "탄수화물"){
            element.style.width="23%";
            element.style.backgroundColor="lightgray";
        }
        else if(element.textContent == "단백질"){
            element.style.backgroundColor="lightpink";
        }
        else if(element.textContent == "지방"){
            element.style.backgroundColor="#FFE283";
        }
    })
};

function DefaultRefresh(){
    var tags = document.getElementsByClassName("store-info-tags");
    var defaulttagflag = false;
    for(var j = 0; j < ids.length; j++){
        for(var i = 0; i < tags.length ; i++){
            tags[i].childNodes.forEach(function(element){
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
        navbar.style.display = "flex";
    }
    else{
        navbar.style.display = "none";
    }
}

/* range value */
document.querySelector('.rangeInput').addEventListener('input',function(event){
    document.querySelector('.range-value__accent').innerText = (event.target.value*3000).toLocaleString('ko-KR');

    /* input color */
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
});
  

/* backbutton */
document.querySelector('.backbutton').addEventListener('click',function (event){
    location.href="result.html";
})

document.querySelector('.backbutton').addEventListener('touchstart',function (event){
    location.href="result.html";
})