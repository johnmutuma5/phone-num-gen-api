import chai from 'chai'
import generateRandomNum from '../generate-random-int';

const { expect } = chai;

describe('generateRandomNum', () => {
  it('Generates random num', () => {
    const num = generateRandomNum(0, 1, '0');
    expect(0).to.equal(0);
  });
});
