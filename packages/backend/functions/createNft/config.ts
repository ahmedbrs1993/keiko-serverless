import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';
import { tableName } from 'resources/index';

export const createNft = {
  handler: getHandlerPath(__dirname),
  environment: { NFT_TABLE_NAME: tableName },
  iamRoleStatements: [nftTableDynamoDBWritePolicies],
  events: [
    {
      httpApi: {
        method: 'post',
        path: '/nfts',
      },
    },
  ],
};
