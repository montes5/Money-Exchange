// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if(currency > 10000) {
    return {error : "You are rich, my friend! We don't have so much coins for exchange"};
  }
  else {
    var H = 50;
        var Q = 25;
        var D = 10;
        var N = 5;
        var P = 1;
        var amountOf = [];
        var solution = {};
        function countAmount(num) {
            amountOf[num] = 0;
            while((currency - num) >= 0) {
                currency -= num;
                amountOf[num]++;
            }
        }
        countAmount(H);
        countAmount(Q);
        countAmount(D);
        countAmount(N);
        countAmount(P);
        if(amountOf[H] != 0) solution["H"] = amountOf[H];
        if(amountOf[Q] != 0) solution["Q"] = amountOf[Q];
        if(amountOf[D] != 0) solution["D"] = amountOf[D];
        if(amountOf[N] != 0) solution["N"] = amountOf[N];
        if(amountOf[P] != 0) solution["P"] = amountOf[P];
        return solution;
    }
}
