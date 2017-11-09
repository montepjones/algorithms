function isPalindrome(str) {
    str = str.toLowerCase();
    let charactersArr = str.split('');
    let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lettersArr = [];
    charactersArr.forEach(char => {
        if (validChars.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    }); 
    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar"));
 

