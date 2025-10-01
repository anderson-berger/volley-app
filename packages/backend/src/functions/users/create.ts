import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { $newUser, User } from '@volley/shared';
import { randomUUID } from 'crypto';
import { ZodError } from 'zod';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const USERS_TABLE = process.env.USERS_TABLE!;

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const body = JSON.parse(event.body || '{}');
    const newUser = $newUser.parse(body);

    const now = new Date();
    const user: User = {
      id: randomUUID(),
      version: 1,
      name: newUser.name,
      email: newUser.email,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    await docClient.send(
      new PutCommand({
        TableName: USERS_TABLE,
        Item: user,
      })
    );

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(user),
    };

  } catch (error) {
    console.error('Erro ao criar usuário:', error);

    if (error instanceof ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          message: 'Dados inválidos', 
          errors: error 
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno do servidor' }),
    };
  }
}