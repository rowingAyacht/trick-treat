console.log("hello worldddd");

//array of candy 
var candies = ["images/dots.png","images/reeces.png","images/sour patch.png","images/twix.png","images/twizzler.png"]

//pick a random candy
function getRandomCandy() {
    randomCandy = candies[Math.floor(Math.random() * 5)];
    return randomCandy;
}

//create a function that gets called when button is clicked
function shuffleCandy(){
    var randomCandy = getRandomCandy();
    document.getElementById("randomCandy").src = randomCandy;
}