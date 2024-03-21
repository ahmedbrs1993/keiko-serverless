import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { emailConfig } from './handler';

export const sendEmail = {
  handler: getHandlerPath(__dirname),
  environment: {
    FROM_EMAIL: emailConfig.from,
    TO_EMAIL: emailConfig.to,
    EMAIL_SUBJECT: emailConfig.subject,
    EMAIL_TEXT: emailConfig.text,
    EMAIL_HTML: emailConfig.html,
  },
  iamRoleStatements: [{
    Effect: 'Allow',
    Action: ['ses:SendEmail', 'ses:SendRawEmail'],
    Resource: '*',
  }],
  events: [
    {
      httpApi: {
        method: 'post',
        path: '/send-email',
      },
    },
  ],
};
