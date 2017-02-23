function sum(a, b) {
  console.log('--- this should not appear ---')
  return a + b;
}
module.exports = sum;
