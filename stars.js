const symbolLine = function(symbol, n) {
  if (n === 0) {
    return "";
  }
  return  symbol +  symbolLine(symbol, n - 1);
};
const triangleStars = function(n) {
   const inner = function(m) {
       if (m > 1) {
           inner(m-1);
       }
       console.log(symbolLine(' ', n-m) + symbolLine('*', (m*2)-1));
   };
   inner(n);
};