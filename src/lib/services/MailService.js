import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

export const SendEmail = ({ html, subject, to }) => {
  transporter.sendMail({
    from: "cakeshop.com",
    to: to,
    subject: subject,
    html: html,
  });
};
