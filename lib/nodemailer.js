var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  auth: {
    user: 'admin@ditzzsenpai.wtf',
    pass: 'Ditzzy210'
  }
})

const verifemail = (tomail) => {
  var options = {
    from: '"DitzzDev" <Ditzzsenpai>',
    to: "codewith@ditzzsenpai.wtf",
    subject: 'Sending Email using Nodejs',
    text: tomail
  }
  transporter.sendMail(options, (err, info) => {
    if (err) throw err
    console.log("Saved")
  })
}

module.exports = {
  functionAxios
}
