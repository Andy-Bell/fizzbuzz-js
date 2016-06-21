describe('FizzBuzz',function() {
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  it('prints number at 1', function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

  it('prints fizz at 3', function() {
    expect(fizzBuzz.play(3)).toEqual('fizz');
  });
  
  it('prints fizz at 6', function() {
    expect(fizzBuzz.play(6)).toEqual('fizz');
  });

  it('prints buzz at 5', function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it('prints buzz at 10', function() {
    expect(fizzBuzz.play(10)).toEqual('buzz');
  });

  it('prints fizzbuzz at 15', function() {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  });
});

