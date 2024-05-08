/**
 * Programming Questions : Hastag Generator
 */

// You are required to implement a function generateHash that generates a hash tag from a given input String.

// THe input  string should be converted to a hash tag format where each word is capitalized and concatenated togetheer without spaces.a

// if the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespaces, the function should return false.valueOf

// otherwise, the function shoulld return the generated hash tag prefixed with #

// write a function generateHash to accomplish this task.

const generateHash = (str) => {
    if(str.length > 280 || str.trim() === 0){
        return false;
    }

    str = str.split(" ");
   str = str.map((curElem) => 
    // curElem.replace(curElem[0], curElem[0].toUpperCase()));
   curElem[0].charAt(0).toUpperCase() + curElem.slice(1));

   str = `#${str.join("")}`;
   console.log(str);
   return str;
}



console.log(generateHash("my name is thapa technical"));