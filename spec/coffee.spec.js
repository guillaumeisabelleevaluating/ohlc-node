// Generated by CoffeeScript 2.3.1
(function() {
  var coffee;

  coffee = require('coffeescript');

  test('coffee', function() {
    return expect(coffee.compile('console.log hoge', {
      bare: true
    })).toBe('console.log(hoge);\n');
  });

}).call(this);
