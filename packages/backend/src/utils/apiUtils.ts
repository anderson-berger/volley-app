import { APIGatewayProxyResult } from 'aws-lambda';

// Interface para opções de cabeçalhos
type ResponseOptions  = {
  headers?: { [key: string]: string };
}

// Função para criar respostas padronizadas
export function ApiResponse(
  statusCode: number,
  body: unknown,
  options: ResponseOptions = {}
): APIGatewayProxyResult {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...options.headers,
    },
    body: JSON.stringify(body),
  };
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}