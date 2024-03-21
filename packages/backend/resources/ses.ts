import { RemovalPolicy } from 'aws-cdk-lib';
//import { HostedZone } from 'aws-cdk-lib/aws-route53';
import {
  EmailIdentity,
  Identity,

} from 'aws-cdk-lib/aws-ses';
import type { Construct } from 'constructs';

//const SES_DOMAIN = "preprod.orion-canopia.fr";
const MY_EMAIL_ADDRESS = "ahmedfadhel.achour@gmail.com";

export const setupSES = (scope: Construct): EmailIdentity | undefined => {

  /*const hostedZone = new HostedZone(scope as any, 'SESHostedZone', {
          zoneName: SES_DOMAIN,
        });

  const identity = new EmailIdentity(scope as any, 'EmailIdentity', {
    mailFromDomain: `notification.${SES_DOMAIN}`,
    identity: Identity.publicHostedZone(hostedZone),
  });*/

  const identity = new EmailIdentity(scope as any, 'EmailIdentity', {
    identity: Identity.email(MY_EMAIL_ADDRESS)
  });

  identity.applyRemovalPolicy(RemovalPolicy.RETAIN);

  return identity;
};