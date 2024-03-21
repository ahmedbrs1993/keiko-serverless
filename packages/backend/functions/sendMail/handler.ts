import { createTransport } from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';

export const emailConfig = {
    from: 'ahmedfadhel.achour@gmail.com',
    to: 'ahmedfadhel.achour@gmail.com',
    subject: 'Warning, User score is low',
    text: 'Dear User,\n\nYour score is lower than expected. Please take necessary actions to improve it.\n\nRegards,\nYour Team',
    html: '<p>Dear User,</p><p>Your score is lower than expected. Please take necessary actions to improve it.</p><p>Regards,<br>Your Team</p>',
  };

const sesClient = new aws.SESClient({});
const transporter = createTransport({ SES: { ses: sesClient, aws } });

export const main = async () => {
  try {
    await transporter.sendMail(emailConfig);
    console.log('Email sent successfully');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};