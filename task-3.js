//This is for Task 3 

const fs = require('fs')

//I'll do both an asynchronous and synchronous read

fs.readFile('welcome.txt',(err, data)=>{
    if (err){
        console.log(err)
    }
    console.log(`Asynchronous read: ${data.toString()}`)
})

console.log(`Synchronous read: ${fs.readFileSync('welcome.txt').toString()}`)