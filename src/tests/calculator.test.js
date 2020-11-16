import calculate from '../utils/calculate.js'
describe('calculate', () => {
  let expression;
  it('evaluates the expression correctly', () => {
    expression = '2+3'
    expect(calculate(expression)).toBe(5);

    expression = '0+3-1'
    expect(calculate(expression)).toBe(2);

    expression = '1.2+2.3'
    expect(calculate(expression)).toBe(3.5);

    expression = '0.4-3'
    expect(calculate(expression)).toBe(-2.6);
  })

  it('since expression is wrong, show no result', () => {
    expression = '0.5+3=5+'
    expect(calculate(expression)).toBe();

    expression = '0.5-2=*8'
    expect(calculate(expression)).toBe();
  })

})