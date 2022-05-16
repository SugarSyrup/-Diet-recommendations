var main_content = document.getElementsByClassName("main-content")[0];

var user = JSON.parse(localStorage.getItem("userInfo"));
var form = JSON.parse(localStorage.getItem("values"));

var scores = [];
var ids = ["곡류군","고기 · 생선 · 계란 · 콩류","야채류","과일류","우유"];
var results = {};

for(var j = 0; j<5;j++){
    scores[j]= "적정";
}

results["지방"] = "적정";
results["단백질"] = "적정";
results["탄수화물"] = "적정";
results["비타민 무기질"] = "적정";


if(user.gender == "Man"){
    if(parseInt(form.곡류군) <= 2){
        scores[0] = "부족";
        results["탄수화물"] = "부족";
    }    
    else if(parseInt(form.곡류군) >= 5){
        scores[0] = "과잉";
        results["탄수화물"] = "과잉";
    }

    if(parseInt(form.육류) <= 3){
        scores[1] = "부족";
        results["단백질"] = "부족";
        results["지방"] = "부족";
    }
    else if(parseInt(form.육류) > 7){
        scores[1] = "과잉";
        results["단백질"] = "과잉";
        results["지방"] = "과잉";
    }

    if(parseInt(form.야채류) <= 4){
        scores[2] = "부족";
        results["비타민 무기질"] = "부족";
    }

    if(form.과일류 == "X"){
        scores[3] = "부족";
    }

    if(form.우유 == "X"){
        scores[4] = "부족";
    }
}
else{
    if(parseInt(form.곡류군) <= 1.5){
        scores[0] = "부족";
        results["탄수화물"] = "부족";
    }    
    else if(parseInt(form.곡류군) >= 4){
        scores[0] = "과잉";
        results["탄수화물"] = "과잉";
    }

    if(parseInt(form.육류) <= 2){
        scores[1] = "부족";
        results["단백질"] = "부족";
        results["지방"] = "부족";
    }
    else if(parseInt(form.육류) > 5){
        scores[1] = "과잉";
        results["단백질"] = "과잉";
        results["지방"] = "과잉";
    }

    if(parseInt(form.야채류) <= 3){
        scores[2] = "부족";
        results["비타민 무기질"] = "부족";
    }

    if(form.과일류 == "X"){
        scores[3] = "부족";
    }

    if(form.우유 == "X"){
        scores[4] = "부족";
    }
}

for(var i = 0; i<scores.length;i++){
    if(scores[i] != "적정"){
        var createSection = document.createElement('section');
        createSection.className = "result-section";
        var createSpan1 = document.createElement('span');
        createSpan1.innerHTML = ids[i];
        createSpan1.className = "result-id";
        var createSpan2 = document.createElement('span');
        createSpan2.innerHTML = scores[i];
        createSpan2.className = "result-score";
        if(scores[i] == "부족"){
            createSpan2.style.color = "rebeccapurple";
        }
        else{ 
            createSpan2.style.color = "red";
        }

        createSection.appendChild(createSpan1);
        createSection.appendChild(createSpan2);
        main_content.appendChild(createSection);
    }
}

var content_text = document.querySelector('.content-text');
if(scores[3] == "부족"){
    var addspan = document.createElement('span');
    addspan.innerHTML = "*과일 하루 2회 섭취를 권장합니다!"
    addspan.className = "content-text__fruit";
    content_text.appendChild(addspan);
}
if(scores[4] == "부족"){
    var addspan = document.createElement('span');
    addspan.innerHTML = "*우유 및 유제품 하루 1회 섭취를 권장합니다!"
    addspan.className = "content-text__milk";
    content_text.appendChild(addspan);
}

var link_btn = document.getElementsByClassName("link-button")[0];

link_btn.addEventListener('click',function(event){
    location.href='linkstore.php';
})


localStorage.setItem("results", JSON.stringify(results));