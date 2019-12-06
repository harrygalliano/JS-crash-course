/****** 
Variables and data types 
*/
/*
var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable meaning rules 
var $3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/**************
 Variable mutation and type corecion
 */
/*
var firstName = 'John';
var age = 28;
// type coercion
console.log(firstName + ' ' + age)

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '
 + job + '. Is he married? ' + isMarried);

// variable mutation 
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
 + job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last name?');
 console.log(firstName + ' ' + lastName)
*/
 /*************
  * Basic operators
  */

  /*
  var now, yearJohn, yearMark;
  now = 2019;
  ageJohn = 28;
  ageMark = 33;

  //Math operators
  var yearJohn = now - 28;
  var yearMark = now - 33;

  console.log(yearJohn);

  console.log(now + 2);
  console.log(now/10);


  // Logical operators
  var johnOlder = ageJohn > ageMark;
  console.log(johnOlder);

  // typeof operator
  console.log(typeof johnOlder);
  console.log(typeof ageJohn);
  console.log(typeof 'Mark is older than John');
  var x;
  console.log(typeof x)

  */

  /*****
   * Operator precedence 
   */

   var now = 2019;
   var yearJohn = 1989;
   var fullAge = 19;

   var isFullAge = now - yearJohn >= fullAge;
   console.log(isFullAge);

   var ageJohn = now - yearJohn;
   var ageMark = 35;
   var average = (ageJohn + ageMark) / 2;
   console.log(average);

   // Multiple assignments 
   var x, y;
   x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
   console.log(x, y);

   // More operators 
   x = x * 2; 
   x *= 2;
   //these two are exactly the same
   console.log(x);
   x = x + 10; 
   x += 10;
   // as are these two 
   x = x + 1;
   x += 1;
   x ++;
   // these three are all ways to make an increment of one 

   x --;
   // this is the same but for minus 1 

   /**********************
    * Coding challenge 1
    */

    /*
    Mark and John are trying to compare their BMI, which is calculated using the formula
    BMI = mass / height^2 = mass / (height * height). 
    mass in KG and height in meters.

    1. Store Mark's and John's mass and height in variables 
    2. Calculate both their BMIs
    3. Create a boolean variable containing information abouth whether Mark has a 
    higher BMI than John.
    4. Print a string to the console containing the variable from step three. (
        something like "Is mark's BMI higher than John's? true/false.")
                */
    var markHeight, markWeight, johnHeight, johnWeight, markBMI, johnBMI, greaterBMI;
    markHeight = 1.8;
    markWeight = 74;
    johnHeight = 1.85;
    johnWeight = 165;

    markBMI = markWeight / (markHeight * markHeight);
    johnBMI = johnWeight / (johnHeight * johnHeight);

    console.log(markBMI);
    console.log(johnBMI);

    greaterBMI = markBMI > johnBMI;
    console.log('Is marks BMI higher than Johns? ', greaterBMI);

    








