'use strict';

(function() {
  function sum() {
    var tSum = 0,
      i = 0,
      max = arguments.length;

      for (i = 0; i < max; i++) {
        if(typeof arguments[i] === 'number') {
         tSum = tSum + arguments[i];
        }
      }

      console.log(tSum);
  }

  sum(2, 7, 8);
}());