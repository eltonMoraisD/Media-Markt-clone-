import { google } from "googleapis";
import nodemailer from "nodemailer";
import { render } from '@react-email/render';
const { OAuth2 } = google.auth;

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADRESS,
} = process.env;

const oAuth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
);

//send email
export const sendEmail = (to: string, url: string, subject: string, template: any,otpCode?:number,) => {
  oAuth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oAuth2Client.getAccessToken()
  const emailHtml = render(template({ otpCode:otpCode,url: url }));
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAUTH2",
      user: SENDER_EMAIL_ADRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    }
  } as nodemailer.TransportOptions)

  const mailOptions = {
    from: SENDER_EMAIL_ADRESS,
    to: to,
    subject: subject,
    html: emailHtml,
  };

  smtpTransport.sendMail(mailOptions, (err, infos) => {
    if (err) return err;
    return infos;
  });

}

