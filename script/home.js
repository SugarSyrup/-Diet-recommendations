// 다른 페이지로 link 되는 버튼들
var form_button = document.getElementById("form-linkButton");
var g_button = document.getElementById("5g-linkButton");
var diet_button = document.getElementById("diet-linkButton");

//user infomation
var user_name = document.getElementById("user-name");
var user_birth = document.getElementById("user-birth");
var user_place = document.getElementById("user-place");
var user_gender = document.getElementById("gender");

function emptyError(){
    var emptyflag = false;
    if(user_name.value == ''){
        document.getElementById('nameError').style = "display:block";
        emptyflag=true;
    }
    if(user_birth.value == ''){
        document.getElementById('birthError').style = "display:block";
        emptyflag=true;
    }
    if(user_place.value == ''){
        document.getElementById('placeError').style = "display:block";
        emptyflag=true;
    }
    if(user_gender.value ==''){
        document.getElementById('genderError').style = "display:block";
        emptyflag=true;
    }

    return emptyflag;
}

function nonEmptyError(){
    if(user_name.value != ''){
        document.getElementById('nameError').style = "display:none";
    }
    if(user_birth.value != ''){
        document.getElementById('birthError').style = "display:none";
    }
    if(user_place.value != ''){
        document.getElementById('placeError').style = "display:none";
    }
    if(user_gender.value != ''){
        document.getElementById('genderError').style ="dispay:none";
    }
}

//식단 개선 버튼
form_button.addEventListener('click', function(evnet){
    event.preventDefault();

    if(emptyError()){
        nonEmptyError();
    }
    else{       
        var userInfo = {
            name: user_name.value,
            birth: user_birth.value,
            place: user_place.value,
            gender:user_gender.value
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));


        location.href='form.html';
    }
})

//5G 식사 버튼
g_button.addEventListener('click', function(evnet){
    event.preventDefault();
    location.href='linkstore.html';
})

//다이어트 버튼
diet_button.addEventListener('click', function(evnet){
    event.preventDefault();
    location.href='linkstore.html';
})


//touch & click event
var touchEvent = false;

document.addEventListener('touchstart',function(event){
    if(!touchEvent){
        touchEvent=true;
        document.querySelector('.start-logo').style.animation = '2s linear 0s 1 normal forwards running fadeout';
        setTimeout(function(){
            document.querySelector('.start-logo').style.display = 'none';
        }, 2000);
    }
})

document.addEventListener('click',function(event){
    if(!touchEvent){
        touchEvent=true;
        document.querySelector('.start-logo').style.animation = '2s linear 0s 1 normal forwards running fadeout';
        setTimeout(function(){
            document.querySelector('.start-logo').style.display = 'none';
        }, 2000);
    }
})