/* you are required to, given a string, replace every letter with its position in the alphabet
If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc.
Example: alphabet_position("The sunset sets at twelve o' clock.") Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

function replaceEachLetter(str){
    out=[]
    for(i in str){
        out.push(returnPosition(str[i]))
    }
    return out
    function returnPosition(letter){
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet.indexOf(letter)+1
    }
}

/*

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function sortString(str){
    var arr = str.split(' ')
    return arr.sort(function(a,b){return position(a)-position(b)}).join(' ')

    function position(word){
        var reg = new RegExp(/\D/g);
        return word.replace(reg, '');
    } 
}

/* Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples:
specialMultiply(3,4); // 12 
specialMultiply(3)(4); // 12 
specialMultiply(3); // function(){}....
 */

function specialMultiply(a,b){

    if(arguments.length === 2)
    {
        return a*b
    }
    else if(arguments.length === 1){
        return function(c){
            return a*c
        }
    }
}

/* Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time): 
var game = guessingGame(5) 
game(1) // "You're too low!" 
game(8) // "You're too high!" 
game(5) // "You're too low!" 
game(7) // "You got it!" 
var game2 = guessingGame(3) 
game2(5) // "You're too low!" 
game2(3) // "You're too low!" 
game2(1) // "No more guesses the answer was 0" 
 */

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11)
    var guesses = 0
    var winFlag=0
    return function guess(guess){
        if(guesses < amount && !winFlag){
            if(guess < answer){
                console.log("Answer too low!")
            }
            if(guess > answer){
                console.log("Answer too High!")
            }
            if(guess == answer){
                console.log("you got it!")
                winFlag = 1
            }
            guesses+=1
        } else {
            if(winFlag){
                console.log("You already won, create a new game to play...")
            } else {
                console.log("No more guesses. The answer was "+ answer);
                
            }
        }
    }
}