//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false;

	}
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  var userName;
function getName() {
	userName = prompt("What is your name?");
	return userName;
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
	getName();
	alert("Welcome, " + userName);
}

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
//Parameters belong to the function expression and they act as placeholders. When a function is called and it is given input where the parameters used to be, this input is called the argument.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //falsy values: 0, null, NaN, false, "", undefined
  //use the double equal signs (==) to check if something is false.
  //e.g.   (problem == false)



//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName() {
	return userName;
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  userName="d";
  var newMyName = myName();

//Now alert the result of invoking newMyName

 alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
userName = "D";
function outerFn() {
		return function () {
			return "nam";
	};
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();
//Now invoke innerFn.
console.log(innerFn());
