//question and answer 1
var myFunctionExpression = function() {
  console.log("Thomas Bach-Nilsen");
};

myFunctionExpression();

//question and answer 2
const callBackClick = document.querySelector(".btn");
callBackClick.addEventListener("click", function() {
  console.log("I was clicked");
});

//question and answer 3
const inputFirstName = document.querySelector("#firstName");
inputFirstName.addEventListener("keydown", function() {});
inputFirstName.addEventListener("keyup", function(event) {
  console.log("The value of key is: ", event.target.value);
});

//question and answer 4
const mouseoverButton = document.querySelector("button");
mouseoverButton.addEventListener("mouseover", function() {
  this.classList.add("hover");
});

//question and answer 5
const mouseoutButton = document.querySelector("[data-animal='dog']");
mouseoutButton.addEventListener("mouseout", function() {
  mouseoutButton.classList.remove("hover");
});


// question and answer 6
const liTags = document.querySelectorAll("li");

liTags.addEventListener("mouseover", function(event){
  console.log(liTags.datset.name);
});

// question and answer 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
      console.log("Harrumph");

// question and answer 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
	console.log(sheep);
});

// question and answer 9
let counter = 0;
const helloTimer = setInterval(function () {
    console.log("Hello");
    counter += 1;
if (counter === 6) {
    clearInterval(helloTimer);
  }
}, 500);

// question and answer 10
const placeholderTextUpdated = document.querySelector("div");

function updateDivText(){
    placeholderTextUpdated.innerHTML = counterDiv;
    placeholderTextUpdated.innerHTML = "<p>Text updated</p>";
      clearInterval(intervalIdDiv);

    counterDiv++;
}

let counterDiv = 1;

const intervalIdDiv = setInterval(updateDivText, 2000);
