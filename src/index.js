module.exports = function solveEquation(equation) {
  const arg = equation.replace(/ /g, '')
    .replace('*x^2', ',')
    .replace('*x', ',')
    .split(',')
    .map(parseFloat);
  const a = arg[0];
  const b = arg[1];
  const c = arg[2];
  const d = b*b - 4*a*c;
  const ans1 = (-b + Math.sqrt(d)) / (2 * a);
  const ans2 = (-b - Math.sqrt(d)) / (2 * a);
  const solution = [ans2, ans1];
  return solution
    .sort(function (a, b) {
      return a - b
    })
    .map(Math.round)
}
