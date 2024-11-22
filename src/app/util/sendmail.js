import nodemailer from 'nodemailer';
const sendmail = async({email, html}) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.APP_PASSWORD,
        }
    });
    let info = await transporter.sendMail({
        from: '"Test SendMail" <test@test.com>',
        to: email,
        subject: "ChangePass",
        html: html,
    });
    return info;
}
export default sendmail;