  function declaration(y) {
     let x = y - 1;
     while (x > 1) {
         if ((y % x) == 0) return false;
         x--;
     }
     return true;
 }
 console.log(`${declaration(5)} .число є простим`);