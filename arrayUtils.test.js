
import * as arrayUtils from "./arrayUtils"

// describe('arrayUtils.js',()=>{
//     test('computeLargestEven',()=>{
//         expect(arrayUtils.computeLargestEven([1, 3, 5, 7])).toBe(-1);
//     })
// })

describe("computeLargestEven", () => {
    const testCases = [
        {
            numberList: [1, 3, 5, 7],
            expected: -1
        },
        {
            numberList: [1, 2, 3, 4, 5],
            expected: 4
        }
    ];

    testCases.forEach(test => {
        it(``, () => {
            const res = arrayUtils.computeLargestEven(test.numberList);
            expect(res).toEqual(test.expected);
        });
    });
});


describe("checkDigitsSame", () => {
    const testCases = [
        {
            number: 22,
            expected: true
        },
        {
            number: 23,
            expected: false
        }
    ];

    testCases.forEach(test => {
        it(``, () => {
            const res = arrayUtils.checkDigitsSame(test.number);
            expect(res).toEqual(test.expected);
        });
    });
});


describe("changeCaptilization", () => {
    const testCases = [
        {
            sentence: 'MeRRy hAD a LITTle lAMp',
            expected: 'mErrY Had A littLE LamP'
        },
    ];

    testCases.forEach(test => {
        it(``, () => {
            const res = arrayUtils.changeCaptilization(test.sentence);
            expect(res).toEqual(test.expected);
        });
    });
});

describe("longestWord", () => {
    const testCases = [
        {
            wordList: ["we", "love", "code", "academy"],
            expected: "academy"
        },
    ];

    testCases.forEach(test => {
        it(``, () => {
            const res = arrayUtils.longestWord(test.wordList);
            expect(res).toEqual(test.expected);
        });
    });
});


describe("isLeapYear", () => {
    const testCases = [
        {
            number: 2000,
            expected: true
        },
        {
            number: 2001,
            expected: false
        }
    ];

    testCases.forEach(test => {
        it(``, () => {
            const res = arrayUtils.isLeapYear(test.number);
            expect(res).toEqual(test.expected);
        });
    });
});


