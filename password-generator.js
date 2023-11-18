const generator = require('generate-password')

/***I'll use the following rulesto ensure a password with integrity
 * Would contain 10 Characters
 * would have Upper and lower case
 * would contain a number
 * would contain a symbol
*/

let passwordGen = function(){
  var newPassword = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
  })

  console.log(newPassword)
}

passwordGen()
