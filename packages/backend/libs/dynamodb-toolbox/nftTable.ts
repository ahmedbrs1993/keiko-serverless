import { Table } from 'dynamodb-toolbox';
import { PARTITION_KEY, SORT_KEY } from '../../resources/dynamoDB';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const nftTable = new Table({
  name: process.env.NFT_TABLE_NAME || 'MISSING_NFT_TABLE',
  partitionKey: PARTITION_KEY,
  sortKey: SORT_KEY,
  DocumentClient: docClient,
});
