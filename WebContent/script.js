
//test
console.log("This is a test.");



// modify the element

//Using this instead of '.innerText' allows you to use the <i></i>i> tags
//die.innerHTML = "Howdy <i>Y'all</i>"; //(Keeping this here for reference)

//Get random number between 1 and 6
function generateRandomDieRoll() {
	return Math.floor(Math.random() * 6 + 1); //floor rounds down
}

function rollDie() { //Keeping both functions for reference
//This one does it by ID
	//select elements by ID
	let die1 = document.getElementById("die1");
	let die2 = document.getElementById("die2");
	
	//Set them to die roll
	die1.innerText = generateRandomDieRoll();
	die2.innerText = generateRandomDieRoll();
}

function rollDice() { //Select multiple sing class

	//select all elements by Class
	let dice = document.getElementsByClassName("dice"); //1st way
	//let dice = document.querySelectorAll("dice"); //2nd way
	
	//Set them to roll dice
	for (let i = 0; i <dice.length; i++) {
		dice[i].innerText = generateRandomDieRoll();
	}
	
}


let button = document.getElementById("rollButton");

button.addEventListener("click", rollDice);