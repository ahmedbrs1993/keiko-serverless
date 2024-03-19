import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({ region: 'eu-west-1' });

export const main = async (event: {
  pathParameters: { userId: string; score: number };
}) => {
  try {
    const existingUserParams = {
      TableName: process.env.USER_TABLE_NAME,
      Key: { PK: { S: 'User' }, SK: { S: event.pathParameters.userId } },
    };

    const existingUser = await client.send(
      new GetItemCommand(existingUserParams),
    );

    // If user exists, update the score
    if (existingUser.Item) {
      const updatedScore = Number(event.pathParameters.score);
      const updateParams = {
        TableName: process.env.USER_TABLE_NAME,
        Key: { PK: { S: 'User' }, SK: { S: event.pathParameters.userId } },
        UpdateExpression: 'SET score = :score',
        ExpressionAttributeValues: { ':score': { S: updatedScore.toString() } },
      };

      await client.send(new UpdateItemCommand(updateParams));
    } else {
      // If user doesn't exist, create a new user with the provided score
      const putParams = {
        TableName: process.env.USER_TABLE_NAME,
        Item: {
          PK: { S: 'User' },
          SK: { S: event.pathParameters.userId },
          id: { S: event.pathParameters.userId },
          score: {
            S: event.pathParameters.score.toString(),
          },
        },
      };

      await client.send(new PutItemCommand(putParams));
    }
  } catch (error) {
    console.error('Error creating/updating user:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};
