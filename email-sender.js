const nodemailer = require('nodemailer');

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
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 