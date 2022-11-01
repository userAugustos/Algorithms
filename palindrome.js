/*So let's work at a palindrome search
*/

function isPalindrome(word) {
    let letters = [];
    const minifiedWord = word.replace(/^\s+|\s+$|\s/g, ""); // so here we remove all whitespaces

    let rword = "";

    // put letters of word into stack
    for (let i = 0; i < minifiedWord.length; i++) {
        letters.push(minifiedWord[i]);
    }

    // pop off the stack in reverse order
    for (const element of minifiedWord) {
        rword += letters.pop();
    }

    if (rword !== minifiedWord) {
        return `${minifiedWord} is not a palindrome!`;
    }

    return `${minifiedWord} is a palindrome!`;
}

console.debug(isPalindrome("race car"));

console.debug(isPalindrome("algo"));
