/*** 
 * Just for Testing sake i'll redo Task 5 adding a bit of complexity to it. i'll read from a file(complex.txt) and email what is read
 * I'll need the FS, Nodemailer dependencies
*/

const nodemailer = require('nodemailer');
var fs = require('fs');


let emailSend = function(textRead){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ifytestnode@gmail.com',
          pass: 'gxkb sdpe zxwt srsf'
        }
      });
      
      var mailOptions = {
        from: 'ifytestnode@gmail.com',
        to: 'ifeanyidev@gmail.com',
        subject: 'Sending Email using Node.js',
        text: textRead
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: '+ info.response);
        }
      }); 
}

emailSend(fs.readFileSync('complex.txt').toString())