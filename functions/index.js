const admin = require('firebase-admin');
const functions = require('firebase-functions');
const contactMailer = require('./contactMailer');
const paypalMailer = require('./paypalMailer');

admin.initializeApp();

exports.paypalMailer = functions.https.onRequest((req, res) => {
  paypalMailer.handler(req, res);
});

exports.contactMailer = functions.https.onRequest((req, res) => {
  contactMailer.handler(req, res);
});



// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(express.static('public'));

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.post('/contact', function (req, res) {
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: functions.config().mail.id,
//       pass: functions.config().mail.key
//     }
//   });
//   var mailOpts = {
//     from: `${req.body.email}`,
//     to: functions.config().mail.id,
//     subject: 'New message from contact form at Lil Fimo Creations',
//     text: `${req.body.name}, email: ${req.body.email}, phone number ${req.body.phone}, says: ${req.body.message}`
//   };
// 	transporter.sendMail(mailOpts, function (error) {
// 		if (error) {
// 			console.log(error.mailOpts);
// 			return;
// 		}
		
// 		transport.close();
// 	});

// });
// exports.app = functions.https.onRequest(app);