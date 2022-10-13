const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
  let count = Number(input.shift());
  let result = '';
  
  input.forEach(el => {
    
    let n = el.split(' ')[0];
    let strs = el.split(' ')[1];
    
    result = strs.split('').map(str => {
        return str.repeat(n)
    }).join('');

    console.log(result)
  })
  /*
  for (let i = 0; i <= count; i++) {
      let n = Number(input[i].split(' ')[0]);
      let cases = input[i].split(' ')[1];
      

      for (let j in cases) {
          for(let k = 0; k < n; k++) {
              result += cases[j];
          }
      }
      console.log(result);
      result = " "
  }
  */
 
});