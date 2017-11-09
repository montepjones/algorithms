function reverseWords(str) {
    let strArray = str.split(' ');
    reverseArr = []
    strArray.forEach( word =>{
        let wordReversed = '';
        for (var i = word.length -1; i >= 0; i--) {
            wordReversed += word[i]
        }
        reverseArr.push(wordReversed)
    });
    return reverseArr.join(' ');
}

console.log(reverseWords('This is a string of words'));

