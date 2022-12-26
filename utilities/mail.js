require("dotenv").config({ path: "../.env" });
const nodeMailer = require("nodemailer");

const sendEmail = async (address, subject, message) => {
    try {
        let transporter = nodeMailer.createTransport({
            host: process.env.mailHost,
            port: process.env.mailPort,
            secure: true,
            auth: {
                user: process.env.mailUser,
                pass: process.env.mailPass,
            },
        });
        let information = await transporter.sendMail({
            from: "testuser04@grpersonal.site",
            to: address,
            subject: subject,
            html: `<h1>This is an email from the anyplay team.</h1><br/>${message}`,
        });
        console.log(`Message sent: ${information.messageId}`);
    } catch (error) {
        console.log(error);
    }
};

sendEmail(
    "ashleygrobler04@gmail.com",
    "This is a 2nd test testing out the anyplay mailing system once again",
    "Hi there dear user. Thanks for receiving this email from us. We hope you have a great time and that this works.\nSorry for this being a second email so far but let's make sure it is all sorted."
);
