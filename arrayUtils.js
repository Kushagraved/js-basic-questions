const computeLargestEven = (input) => {
    let max_elem = Number.MIN_VALUE;
    input.forEach((num) => {
        if (num % 2 === 0) {
            max_elem = Math.max(max_elem, num);
        }
    });
    return max_elem === Number.MIN_VALUE ? -1 : max_elem;
};
// console.log(computeLargestEven([1,2,3,4,5]));
// console.log(computeLargestEven([1, 3, 5, 7]));

const checkDigitsSame = (input) => {
    if (input.toString().length === 1) {
        console.log('Consider numbers to have 2 digits or mor');
    }
    let temp = input;
    //let allSame=true;
    let prev;
    while (temp > 0) {
        let rem = temp % 10;
        if (!prev || prev === rem) {
            prev = rem;
        }
        else {
            return false;
        }
        temp = parseInt(temp / 10);
    }
    return true;
};
// console.log(checkDigitsSame(22));
// console.log(checkDigitsSame(23));

const changeCaptilization = (input) => {
    let output = [...input];
    output.forEach((char, idx) => {
        if (char === char.toUpperCase()) {
            output[idx] = char.toLowerCase();
        }
        else {
            output[idx] = char.toUpperCase();
        }
        // if(char===char.toLowerCase()){
        //     char=char.toUpperCase();
        // }
    });
    return output.join('');
};

// console.log(changeCaptilization("MeRRy hAD a LITTle lAMp"));

const longestWord = (input) => {
    let output;
    input.forEach((word) => {
        if (!output || word.length > output.length) {
            output = word;
        }
    });

    return output;
};

// console.log(longestWord(["we", "love", "code", "academy"]));


const isLeapYear = (year) => {
    year = Number(year);
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// console.log(isLeapYear(2000));


const stringEndsWithScript = (input) => {
    if (input.length < 6) {
        console.log('Consider string to have atleast 6 characters');
        return;
    }
    return input.endsWith('Script');
};

// console.log(stringEndsWithScript("JavaScript"));
// console.log(stringEndsWithScript("Javascript"));

const concatWithoutFirstCharacter = (input) => {
    if (input.length !== 2) {
        console.log('Consider input to have 2 words');
        return;
    }
    let word1 = input[0];
    let word2 = input[1];
    word1 = word1.substring(1);
    word2 = word2.substring(1);
    return word1 + word2;
};

// console.log(concatWithoutFirstCharacter(["code", "academy"]));

const countVowels = (input) => {
    let count = 0;
    input.split('').forEach((char) => {
        switch (char) {
        case 'a': {
            count++;
            break;
        }
        case 'e':{
            count++;
            break;
        } 
        case 'i':{
            count++;
            break; 
        } 
        case 'o':{
            count++;
            break;
        }
        case 'u': {
            count++;
            break;
        }
        }

    });
    return count;
};

// console.log(countVowels("codeacademy"));

const replaceCharacterWithNextCharacter = (input) => {

    let output = input.split('').map((char, idx) => {
        let ascii = input.charCodeAt(idx) - 'a'.charCodeAt(0);
        let next_char_ascii = (ascii + 1) % 26;
        char = String.fromCharCode(next_char_ascii + 'a'.charCodeAt(0));
        return char;
    });

    return output.join('');
};

console.log(replaceCharacterWithNextCharacter('codeacademy'));
console.log(replaceCharacterWithNextCharacter('lazyinterns'));


module.exports={computeLargestEven ,checkDigitsSame,changeCaptilization,longestWord,isLeapYear,stringEndsWithScript,concatWithoutFirstCharacter,countVowels,replaceCharacterWithNextCharacter};





