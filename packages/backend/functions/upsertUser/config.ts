import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { userTableDynamoDBWritePolicies } from 'resources/policies';
import { tableUser } from 'resources/index';

export const upsertUser = {
  handler: getHandlerPath(__dirname),
  environment: { USER_TABLE_NAME: tableUser },
  iamRoleStatements: [userTableDynamoDBWritePolicies],
  events: [
    {
      httpApi: {
        method: 'put',
        path: '/user/{userId}/{score}',
      },
    },
  ],
};
