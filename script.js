//question and answer 1
var myFunctionExpression = function(){
  console.log("Thomas Bach-Nilsen");
};

myFunctionExpression();

//question and answer 2
const callBackClick = document.querySelector(".btn");
callBackClick.addEventListener("click", function(){
  console.log("I was clicked");
});

//question and answer 3
const inputFirstName = document.querySelector("#firstName");
inputFirstName.addEventListener("keydown", function(){
});
inputFirstName.addEventListener("keyup", function(event){
  console.log("The value of key is: ", event.target.value);
 });

//question and answer 4
const mouseoverButton = document.querySelector("button");
mouseoverButton.addEventListener("mouseover", function() {
  mouseoverButton.classList.add("hover");
});

//question and answer 5
const mouseoutButton = document.querySelector("[data-animal]");
mouseoutButton.addEventListener("mouseout", function() {
  mouseoutButton.classList.remove("hover");
});

// question and answer 6
const liTags = document.querySelectorAll("li");
