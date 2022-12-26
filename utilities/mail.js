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

module.exports=sendEmail