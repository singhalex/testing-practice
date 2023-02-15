import { capitalize } from "./app";
import { reverseString } from "./app";
import { calculator } from "./app";
import { caesarCipher } from "./app";
import { analyzeArray } from "./app";


test('Capitalize the first character in a given string', () => {
    expect(capitalize('homer')).toBe('Homer');
})

test('Capitalize the first character in a given string', () => {
    expect(capitalize('dorothy')).toBe('Dorothy')
})

test('Reverses a given string', () => {
    expect(reverseString('food')).toBe('doof')
})

test('Reverses a given string', () => {
    expect(reverseString('Giraffe')).toBe('effariG')
})

test('Add 1 + 3 and returns the sum of 4', () => {
    expect(calculator.sum(1, 3)).toEqual(4)
})

test('Add 5 + 9 and returns the sum of 14', () => {
    expect(calculator.sum(5, 9)).toEqual(14)
})

test('Subtract 5 from 10 and return 5', () => {
    expect(calculator.subtract(10, 5)).toEqual(5)
})

test('Subtract 10 from 5 and return -5', () => {
    expect(calculator.subtract(5, 10)).toEqual(-5)
})

test('Divide 9 by 3 and receive 3', () => {
    expect(calculator.divide(9,3)).toEqual(3)
})

test('Divide 20 by 5 and receive 4', () => {
    expect(calculator.divide(20,5)).toEqual(4)
})

test('Multiply 2 * 5 and return 10', () => {
    expect(calculator.multiply(2, 5)).toEqual(10)
})

test('Multiply -2 * 5 and return 10', () => {
    expect(calculator.multiply(-2, 5)).toEqual(-10)
})

test('Shift the letters in "hello" by 2 characters to get "jgnnq"', () => {
    expect(caesarCipher('hello', 2)).toBe('jgnnq')
})

test('Shift the letters in "goodbye" by 5 characters to get "lttigdj"', () => {
    expect(caesarCipher('goodbye', 5)).toBe('lttigdj')
})

test('Take an array of [1, 2, 3, 6] and return an object with an average property of 3', () => {
    expect(analyzeArray([1, 2, 3, 6])).toEqual(expect.objectContaining({
        average: 3,
    }))
})

test('Take an array of [2, 4, 6, 12] and return an object with an average property of 3', () => {
    expect(analyzeArray([2, 4, 6, 12])).toEqual(expect.objectContaining({
        average: 6,
    }))
})

test('Take an array of [2, 4, 6, 12] and return an object with an min property of 2', () => {
    expect(analyzeArray([2, 4, 6, 12])).toEqual(expect.objectContaining({
        min: 2,
    }))
})

test('Take an array of [-2, 4, 6, 12] and return an object with an min property of 2', () => {
    expect(analyzeArray([-2, 4, 6, 12])).toEqual(expect.objectContaining({
        min: -2,
    }))
})

test('Take an array of [-2, 4, 6, 12] and return an object with an max property of 12', () => {
    expect(analyzeArray([-2, 4, 6, 12])).toEqual(expect.objectContaining({
        max: 12,
    }))
})

test('Take an array of [-2, 4, 6, 1222] and return an object with an max property of 1222', () => {
    expect(analyzeArray([-2, 4, 6, 1222])).toEqual(expect.objectContaining({
        max: 1222,
    }))
})

test('Take an array of [-2, 4, 6, 1222] and return an object with an length property of 4', () => {
    expect(analyzeArray([-2, 4, 6, 1222])).toEqual(expect.objectContaining({
        length: 4,
    }))
})

test('Take an array of [] and return an object with an length property of 0', () => {
    expect(analyzeArray([])).toEqual(expect.objectContaining({
        length: 0,
    }))
})