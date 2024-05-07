/**
 * Programming Questions : Longest word in a string
 */

// Q; write a function findLongest word that takes a string as input and retur the longest word in the string . if there are multiple longest words, return the first one enconubterd.

/**
 * Constraints:
 */
// The input string may contains alphabateic characters, digits, spaces and punctuations.
// the input string in non-empty
// the input string may conatain multiple words separated by spaces.

/**
 * Notes;
 */

// if the input string is empty or conatins only whitespace the function should return an false.
// the function should ignore leading and trailing whitespaces when determining the longest word.



const findLongestWord = (str) => {
    if (str.trim() === 0) {
        return false;
    }
    strArr = str.split(" ");
    // console.log(strArr);
    
    // Method -------- 1
    // strArr = strArr.sort((a,b) => a.length-b.length)
    // console.log(strArr);

    // return strArr.at(-1);

    // Method---------- 2

    return strArr.reduce(
        (accu, curr) => {
            if (curr.length > accu.length) {
                accu = curr;
            }
            return accu;
        }
    )

  
}
console.log(
    findLongestWord("The quick brown fox jumps kdvdjkvvuieghfgjnv over javascripts the 1545  lazy dog")
);