var nodemailer = require("nodemailer");

console.log("Listening on port 3000...");
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "test@mail.com",
    pass: "pass"
  }
});

var mailoption = {
  from: "test@mail.com",
  to: "lisabackend@gmail.com",
  subject: "test my node mailer",
  text: "yeah, make it!"
};

transporter.sendMail(mailoption, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("email sent!" + info.response);
  }
});
process.on("uncaughtException", function(err) {
  console.log(err);
});
