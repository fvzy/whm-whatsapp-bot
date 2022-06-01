var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: '',
  port: 465,
  auth: {
    user: '',
    pass: ''
  }
})

function mail(text, namabot, token){
  var options = {
    from: `Verifikasi OTP ${namabot} Bot" <Ditzzsenpai>,
    to: text,
    subject: `Verifikasi ${namabot}`,
    html: `${token}`,
}

transporter.sendMail(options, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
})
}

module.exports = {
  mail
}