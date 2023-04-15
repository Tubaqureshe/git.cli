    //   Day.16-April-2023 ,

            // Task.1
//  Q.1  Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx". 
 
//                     Answers
//  var userInput = Number(prompt("Enter your total assets to calculate zakat: "));
// var zakatPercentage = 0.025;
//  var result = zakatPercentage * userInput;
// alert("Your zakat value is " + result);               

//               Task.2
// Q.2  calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

//                 Answers
//   var familyMembers = Number(prompt("The total number of enter family members: "));
// var fitrah = prompt("Choose a fitrah method:\n1. Wheat (250 per person)\n2. Barley (450 per person)\n3. Dates (2100 per person)\n4. Cash (2800 per person)");
// var fitrahAmount = 0;
// if (fitrah == "1") {
//   fitrahAmount = 250 * familyMembers;
// }else if (fitrah == "2") {
//   fitrahAmount = 450 * familyMembers;
// }else if (fitrah == "3") {
//   fitrahAmount = 2100 * familyMembers;
// }else if (fitrah == "4") {
//   fitrahAmount = 2800 * familyMembers;
// }else {
//   alert("Invalid option selected");
// }
// if (fitrahAmount !== 0) {
//   alert("Your fitrah amount is " + fitrahAmount);
// }

//                Task.3
//  Q.3 Create a program that generates a random number between 1 and 10 and stores it
//  in a variable called "secretNumber". Then, ask the user to enter a guess for the
//  secret number using a prompt.
//  Use an if-else statement to check if the user's guess matches the secret number. If
//  the guess is correct, display a message using an alert saying "Congratulations! You
//  guessed the secret number". Otherwise, if the guess is too high or too low, display
//  an appropriate message informing the user to guess again.

//             Answers
//   var secretNumber =  10 + 1;
// var guess = Number(prompt("The secret number (between 1 and 10):"));
// if (guess == secretNumber) {
//   alert("Congratulations! You the secret number.");
// } else if (guess < secretNumber) {
//   alert("Your value low.Yes again.");
// } else if (guess > secretNumber) {
//   alert("Your value high. Yes again.");
// }
 
//                  Task.4
//  Q.4 Create a program that asks the user to enter a name, and then prints out the name
//  with the first letter capitalized (Make your name in capitalized case).
 
//              Answers
//   var name = prompt("Enter a name");
// var a = name.slice(0,1).toUpperCase();
//  var b = name.slice(1).toLowerCase();
// alert(a+b);

//         Task.5
//  Q.5 In this task, you will be creating two empty arrays called "contactNumbers" and
//  "contactNames". Using the prompt, you will ask the user to enter a contact number
//  and contact name. You will then push these values into their respective arrays
//  using the push method. After adding all the contacts, you will display the contact
//  numbers and names in the console. To do this, you will need to use a for loop to
//  iterate through both arrays and log each element to the console.
//  Make sure to use descriptive variable names and comment on your code for clarity.

//                  Answers
//  var contactNumbers = ["03187389700"];
// var contactNames = ["soomi"];
// for (var i = 0; i < 3; i++) {
//   var number = prompt("Enter a contact number:");
//   var name = prompt("Enter a contact name:");
// }
// for (let i = 0; i < contactNumbers.length; i++) {
//     console.log(`Name: ${contactNames[i]}, Number: ${contactNumbers[i]}`);
//   }

//                   Task.6
//  Q.6  Create an Array that contains different products, and get input from the user in which you
//  ask your user to give the position of that element he/she wants. Now remove that Item
//  from your array and console the removed item, Also display the remaining items in the
//  array and total number of items remaining.

//                  Answers
//   var products = ['apple', 'banana', 'orange', 'grape', 'watermelon'];
// var postion = prompt(`Enter the index of the item to remove (0-${products.length - 1})`);
// var removedItem = products.splice(postion, 1);
// alert(`Removed item ${removedItem}`);
// alert(`Remaining items  ${products}`);
// alert(`Total number of items remaining  ${products.length}`);

//                Task.7
//  Q.7  Create a program that asks the user for their nationality, gender, and age using the prompt
//  function. The program should then use nested if-else statements to determine if the
//  person is eligible to vote.
//  First, the program should check if the person is Pakistani or Indian. If they are not, the
//  program should display a message saying they are not eligible to vote.
//  If they are Pakistani or Indian, the program should then check their gender. If the person is
//  male and over the age of 18, they are eligible to vote. If the person is female and over the
//  age of 18, the program should ask if they are married. If they are married, they are eligible
//  to vote. If they are not married, they are not eligible to vote.
//  If the person is under 18, the program should display a message saying they are not eligible
//  to vote.

//              Answers
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
       
//           Task.8
// Q.8  You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array

//         Answers
// var WorldCupSquad = ["Babar Azam ", "Fakhar Zaman","Shadab Khan", "Haider Ali", "Asif Ali ", "Haris Rauf ", "Iftikhar Ahmed", "Khushdil Shah", "Mohammad Hasnain", "Mohammad Nawaz", "Mohammad Rizwan", "Mohammad Wasim", "Naseem Shah", "Shaheen Shah Afridi", "Shan Masood"];
// console.log(WorldCupSquad)
// var WorldCupSquad2 = WorldCupSquad.slice(0, 11)
// console.log(WorldCupSquad2)