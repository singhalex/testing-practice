import exp from "constants";

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function reverseString(string) {
    let charQueue = string.split('');
    let reversedString = '';
    
    for (let i = charQueue.length - 1; i >= 0; i--) {
        reversedString += charQueue[i];
    }
    return reversedString;
}

export const calculator = {
    sum: (a, b) => { return a + b; },
    subtract: (a, b) => { return a - b },
    divide: (a, b) => { return a / b },
    multiply: (a, b) => { return a * b}
}

export function caesarCipher(string, shift) {
    let array = string.split('');
    // Get char code of element in the array
    array = array.map(char => char.charCodeAt(0));
    // Apply the shift to each element
    array = array.map(num => num + shift);
    // Adjust the element if it wraps past z
    array = array.map(num => {
        if (num > 122) {
            return num - 26
        } else {
            return num
        }
    })
    // Convert numbers back to chars
    array = array.map(num => String.fromCharCode(num));
    
    // Rejoin the elements into a string
    const cipher = array.join('');
    
    return cipher
}

export function analyzeArray(array) {
    let average, min, max;
    const length = array.length

    if (array.length === 0) {
        average = 0;
        min = 0;
        max = 0;
    } else {
        const sum = (array.reduce((accumulator, currentValue) => accumulator + currentValue))
        average = sum / array.length
        min = Math.min(...array)
        max = Math.max(...array)
    }
    

    return {
        average: average,
        min: min,
        max: max,
        length: length,
    }

}