const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vjtirailwayconcession@gmail.com",
        pass: "lvhoqvpbulpwliha"
    }
});


module.exports.appliedMail = (mailOptions) => {
     transporter.sendMail(mailOptions, function(error, info){

    if(error){
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
})
};