// 2. sum of number until user enters stop

const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
 });
 let s = 0;
 (function getNumber() {
  
  r1.question('Enter any number: ',(n) => {
      if(n !== "stop") {
          s = s+parseInt(n);      
          getNumber();
      } else {
          console.log(`The sum is: ${s}`);
          r1.close();
      } 
  });
})();