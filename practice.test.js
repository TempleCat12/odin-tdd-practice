// const sum = require('./sum')
import *  as Practice from './practice'

test("add 1 + 2 equals 3", () => {
    expect(Practice.sum(1,2)).toBe(3)
})

test('capitalize', () => {
    expect(Practice.capitalize('london')).toBe('London')
});
test('capitalize and trim space', () => {
    expect(Practice.capitalize('    london')).toBe('London')
});

test('reverseString', () => {
    expect(Practice.reverseString('lkj')).toBe('jkl')
});

test('calculator object add function', () => {
    expect(Practice.calculator.add(4, 3)).toBe(7)
});
test('calculator object subtract function', () => {
    expect(Practice.calculator.subtract(4, 3)).toBe(1)
});
test('calculator object divide function', () => {
    expect(Practice.calculator.divide(4, 3)).toBeGreaterThanOrEqual(1.2)
    // expect(Practice.calculator.divide(4, 0)).toBe(Infinity)
    expect(() => Practice.calculator.divide(4, 0)).toThrow('The divisive number cannot be zero')
});
test('calculator object multiply function', () => {
    expect(Practice.calculator.multiply(4, 3)).toBeGreaterThan(11)
});

test('caesarCipher shiftKey > 0', () => {
    // shiftKey > 0
    expect(Practice.caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza')

});
test('caesarCipher shiftKey < 0', () => {
    // 
    expect(Practice.caesarCipher('ab,c', -3)).toBe('xy,z')

});
test('caesarCipher different case', () => {
    // 
    expect(Practice.caesarCipher('Ab,c', -3)).toBe('xy,z')

});

test('analyzeArray ', () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }
    expect(Practice.analyzeArray([1,8,3,4,2,6])).toEqual(object)
});

