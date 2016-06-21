function FizzBuzz() {
}

FizzBuzz.prototype = {
  play: function(n) {
    if(n % 15 === 0) return 'fizzbuzz';
    if(n % 3 === 0) return 'fizz';
    if(n % 5 === 0) return 'buzz';
    return n;
  }

};

fizzBuzz = new FizzBuzz;

function List() {
  for (var i = 1; i < 10; i++) {
    console.log(fizzBuzz.play(i));
  }
}
