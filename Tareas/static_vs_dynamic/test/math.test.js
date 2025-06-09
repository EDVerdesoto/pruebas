// test/math.test.js
import { expect } from 'chai';
import { divide } from '../math.js';

describe('divide()', () => {
    it('should divide two positive numbers', () => {
        expect(divide(6, 3)).to.equal(2);
    });

    it('should throw an error when divisor is zero', () => {
        expect(() => divide(6, 0)).to.throw('Divisor cannot be zero');
    });
});
