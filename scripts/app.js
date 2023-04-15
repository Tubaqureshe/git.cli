// Day 1 - 6 APRIL 2023


// alert('bano qabil')
// document.write("<h1>hello</h1>") 
// console.log("123")

// var name = 'usama'
// var age = 24
// console.log(name)

// alert('hello '+ name + ' kesse ho' + age)
// document.write("<h1>hello "+ age +"</h1>")
// console.log(typeof age)

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2/3)
// console.log(2**3)

// console.log(1/(3+(6*7)/(6+4)))
// var age =+prompt("Your Name Please")
// var age1 =+prompt("Your Father Please")

// console.log(+Number(age)+Number(age1))
// console.log(age + age1)


// Day 2  6 APRIL 2023


// var zakatpercentage = 0.025;

// var userInput = prompt("user value");

// userInput = parseInt("user value");

// var result = zakatpercentage * userInput;

// alert("Your zakat value is " +0.025);


// Day 16-April-2023 
//       // 1st task
// var userInput = Number(prompt("Enter your total assets to calculate zakat: "));
// var zakatPercentage = 0.025;
// var result = zakatPercentage * userInput;
// alert("Your zakat value is " + result);

// //         // 2nd task
// var familyMembers = Number(prompt("The total number of enter family members: "));
// var fitrah = prompt("Choose a fitrah method:\n1. Wheat (250 per person)\n2. Barley (450 per person)\n3. Dates (2100 per person)\n4. Cash (2800 per person)");
// var fitrahAmount = 0;
// if (fitrah === "1") {
//   fitrahAmount = 250 * familyMembers;
// }else if (fitrah === "2") {
//   fitrahAmount = 450 * familyMembers;
// }else if (fitrah === "3") {
//   fitrahAmount = 2100 * familyMembers;
// }else if (fitrah === "4") {
//   fitrahAmount = 2800 * familyMembers;
// }else {
//   alert("Invalid option selected");
// }
// if (fitrahAmount !== 0) {
//   alert("Your fitrah amount is " + fitrahAmount);
// }
      // 3rd task
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = Number(prompt("The secret number (between 1 and 10):"));
// if (guess === secretNumber) {
//   alert("Congratulations! You the secret number.");
// } else if (guess < secretNumber) {
//   alert("Your value low.Yes again.");
// } else if (guess > secretNumber) {
//   alert("Your value high. Yes again.");
// }
 
// 4th task
// var name = prompt("Enter a name");
// var a = name.slice(0,1).toUpperCase();
//  var b = name.slice(1).toLowerCase();
// alert(a+b);

// 5th task
// var contactNumbers = ["03187389700"];
// var contactNames = ["soomi"];
// for (var i = 0; i < 3; i++) {
//   var number = prompt("Enter a contact number:");
//   var name = prompt("Enter a contact name:");
// }

// for (var i = 0; i < contactNumbers.length; i++) {
//    console.log(`Contact ${i+1}: ${contactNumbers[i]} (${contactNames[i]})`);
// }

// 6th task
// var products = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
// var postion = prompt(`Enter the index of the item to remove (0-${products.length - 1})`);
// var removedItem = products.splice(postion, 1);
// alert(`Removed item ${removedItem}`);
// alert(`Remaining items  ${products}`);
// alert(`Total number of items remaining  ${products.length}`);

// 7th task
// var nationality = prompt("What is your nationality?");
// var gender = prompt("What is your gender?");
// var age = parseInt(prompt("What is your age?"));
// if (nationality == "Pakistani" || nationality == "Indian") {
//   if (gender == "Male" && age >= 18) {
//     alert("You are eligible to vote.");
//   } else if (gender == "female" && age >= 18) {
//     var married = prompt("Are you married? (yes or no)");
//     if (married == "yes") {
//       alert("You are eligible to vote.");
//     } else {
//       alert("You are not eligible to vote.");
//     }
//   } else {
//     alert("You are not eligible to vote.");
//   }
// } else {
//   alert("You are not eligible to vote.");
// }

// 8th task

var WorldCupSquad = ["Babar Azam ", "Fakhar Zaman","Shadab Khan", "Haider Ali", "Asif Ali ", "Haris Rauf ", "Iftikhar Ahmed", "Khushdil Shah", "Mohammad Hasnain", "Mohammad Nawaz", "Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shaheen Shah Afridi", "Shan Masood"];
 console.log(WorldCupSquad)
 var WorldCupSquad2 = WorldCupSquad.slice(0, 11)
 console.log(WorldCupSquad2)


