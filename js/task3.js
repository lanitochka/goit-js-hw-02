const findLongestWord = function(string) {
    const splitString = string.split(' ');
    console.log(splitString);
    let longestString = splitString[0];

    for (let i = 0; i < splitString.length; i += 1) {
        // console.log(splitString[i]);

        if (splitString[i].length > longestString.length) {
            longestString = splitString[i];
        }
    }

    return longestString;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'