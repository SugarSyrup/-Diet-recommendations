// var inputs = document.querySelectorAll("section.checkboxlist > input");


// function insertAfter(referenceNode, newNode) {
//     if (!!referenceNode.nextSibling) {
//       referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
//     } else {
//       referenceNode.parentNode.appendChild(newNode);
//     }  
//   }

// function createRangeSection(){
//     var inputSection = document.createElement("section");
//     inputSection.className = "defaultRange";
    
//     var rangeSection = document.createElement("section");
//     rangeSection.className = "range-values";
    
//     var span1 = document.createElement("span");
//     span1.innerHTML = 0;
//     rangeSection.appendChild(span1);
    
//     var span2 = document.createElement("span");
//     span2.innerHTML = 5;
//     rangeSection.appendChild(span2);
    
//     var span3 = document.createElement("span");
//     span3.innerHTML = 10;
//     rangeSection.appendChild(span3);
//     inputSection.appendChild(rangeSection);
    
//     var newInput = document.createElement("input");
//     newInput.type = "range";
//     newInput.className = "rangeInput";
//     newInput.style = "width:100%";
//     newInput.min="0"; newInput.max="10", newInput.step="1";
//     inputSection.appendChild(newInput);

//     return inputSection;
// }

// for(var i = 0; i<inputs.length ;i++){
//     inputs[i].addEventListener('click',function(event){
//         if(event.target.checked){
//             var inputSection = createRangeSection();
            
//             insertAfter(event.target.nextSibling.nextSibling,inputSection);
//         }
//         else{
//             event.target.nextSibling.nextSibling.nextSibling.remove();
//         }
//     })
// }

// var fruitTrue = document.getElementById("fruit-true");
// var fruitFalse =document.getElementById("fruit-false");
// var milkTrue = document.getElementById("milk-true");
// var milkFalse =document.getElementById("milk-false");

// var fruitFlag = false;
// var milkFlag = false;

// var fruitButtons = [fruitTrue, fruitFalse];
// var milkButtons = [milkTrue, milkFalse];

// function fruitFlaging(){
//   if(fruitFlag){
//     fruitTrue.style.backgroundColor="#97BC62";
//     fruitTrue.style.fontWeight="bolder";
//     fruitTrue.style.bolder="none";

//     fruitFalse.style.backgroundColor="white";
//     fruitFalse.style.fontWeight="normal";
//     fruitFalse.style.bolder=".5px solid #dadada";    
//   }
//   else{
//     fruitFalse.style.backgroundColor="#97BC62";
//     fruitFalse.style.fontWeight="bolder";
//     fruitFalse.style.bolder="none";

//     fruitTrue.style.backgroundColor="white";
//     fruitTrue.style.fontWeight="normal";
//     fruitTrue.style.bolder=".5px solid #dadada";    
//   }
// }

// function milkFlaging(){
//   if(milkFlag){
//     milkTrue.style.backgroundColor='#97BC62';
//     milkTrue.style.fontWeight="bolder";
//     milkTrue.style.bolder="none";

//     milkFalse.style.backgroundColor="white";
//     milkFalse.style.fontWeight="normal";
//     milkFalse.style.bolder=".5px solid #dadada";    
//   }
//   else{
//     milkFalse.style.backgroundColor="#97BC62";
//     milkFalse.style.fontWeight="bolder";
//     milkFalse.style.bolder="none";

//     milkTrue.style.backgroundColor="white";
//     milkTrue.style.fontWeight="normal";
//     milkTrue.style.bolder=".5px solid #dadada";    
//   }
// }

// fruitFlaging();
// milkFlaging();

// for(var i = 0; i < fruitButtons.length ; i++){
//   fruitButtons[i].addEventListener('click',function(event){
//     fruitFlag = !fruitFlag; 
//     fruitFlaging();
//   });
// }

// for(var i = 0; i < milkButtons.length ; i++){
//   milkButtons[i].addEventListener('click',function(event){
//     milkFlag = !milkFlag;
//     milkFlaging();
//   });
// }

var fruitTrue = document.getElementById("fruit-true");
var fruitFalse =document.getElementById("fruit-false");
var milkTrue = document.getElementById("milk-true");
var milkFalse =document.getElementById("milk-false");

var fruitFlag = false;
var milkFlag = false;

function fruitFlaging(){
  if(fruitFlag){
    fruitTrue.style.backgroundColor="#FFE283";
    fruitTrue.style.fontWeight="bolder";
    fruitTrue.style.bolder="none";

    fruitFalse.style.backgroundColor="white";
    fruitFalse.style.fontWeight="normal";
    fruitFalse.style.bolder=".5px solid #dadada";    
  }
  else{
    fruitFalse.style.backgroundColor="#FFE283";
    fruitFalse.style.fontWeight="bolder";
    fruitFalse.style.bolder="none";

    fruitTrue.style.backgroundColor="white";
    fruitTrue.style.fontWeight="normal";
    fruitTrue.style.bolder=".5px solid #dadada";    
  }
}

function milkFlaging(){
  if(milkFlag){
    milkTrue.style.backgroundColor='#FFE283';
    milkTrue.style.fontWeight="bolder";
    milkTrue.style.bolder="none";

    milkFalse.style.backgroundColor="white";
    milkFalse.style.fontWeight="normal";
    milkFalse.style.bolder=".5px solid #dadada";    
  }
  else{
    milkFalse.style.backgroundColor="#FFE283";
    milkFalse.style.fontWeight="bolder";
    milkFalse.style.bolder="none";

    milkTrue.style.backgroundColor="white";
    milkTrue.style.fontWeight="normal";
    milkTrue.style.bolder=".5px solid #dadada";    
  }
}

fruitFlaging();
milkFlaging();

fruitTrue.addEventListener('click', function(event){
  fruitFlag = true;
  fruitFlaging();
});

fruitFalse.addEventListener('click', function(event){
  fruitFlag = false;
  fruitFlaging();
});

milkTrue.addEventListener('click', function(event){
  milkFlag = true;
  milkFlaging();
});

milkFalse.addEventListener('click', function(event){
  milkFlag = false;
  milkFlaging();
});
//event.target으로 value 보고 Flag 값 정해도 되겠다.

//button eventListener
var btn = document.getElementById("form-button");

btn.addEventListener('click',function(event){
  var ranges = document.querySelectorAll("input.rangeInput");
  var values = {};
  for(var i = 0; i<ranges.length ; i++){
    values[ranges[i].parentElement.previousElementSibling.textContent] = ranges[i].value;
    if(ranges[i].parentElement.previousElementSibling.textContent == "고기 · 생선 · 계란 · 콩류"){
      values["육류"] = ranges[i].value;
    }
  }

  if(fruitFlag){
    values["과일류"] = 'O';
  }
  else{
    values["과일류"] = 'X';
  }
  
  if(milkFlag){
    values["우유"] = 'O';
  }
  else{
    values["우유"] = 'X';
  }

  localStorage.setItem("values", JSON.stringify(values));
  location.href='result.html';
})

var rangeInputArray = document.getElementsByClassName('rangeInput');
for(var i = 0; i<rangeInputArray.length ; i++){
  rangeInputArray[i].addEventListener('input',function(event){
    event.target.parentElement.querySelector('.range-value__accent').innerText = event.target.value;
    // console.log($('.rangeInput').offset().left);
    // console.log($('.rangeInput').offset().top);
  });
}


$( '.main-content input' ).on( 'input', function( ) {
  var value =  100 / $(this).attr('max');
  $( this ).css( 'background', 'linear-gradient(to right, #FFE283 0%, #FFE283 '+value * this.value +'%, #fff ' +value *  this.value + '%, white 100%)' );
} );

/*toast message */


/* backbutton */
document.querySelector('.backbutton').addEventListener('click',function (event){
  location.href="home.html";
})

document.querySelector('.backbutton').addEventListener('touchstart',function (event){
  location.href="home.html";
})