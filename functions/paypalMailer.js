const cors = require('cors')({origin: true});
const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: functions.config().mail.id,
      pass: functions.config().mail.key
  }
});

exports.handler = function(req, res) {
  cors(req, res, () => {
  //  res.redirect('/');

  const mailOpts = {
    from: `annonimous@email.com`,
    to: functions.config().mail.id,
    subject: 'New paypal order from Lil Fimo Creations',
    text: `${req.body.name}, email: ${req.body.email}, phone number ${req.body.phone}, says: ${req.body.message}`
  };
	transporter.sendMail(mailOpts);
	res.status(200).send({isEmailSend: true});
		
		// transport.close();

  });
}