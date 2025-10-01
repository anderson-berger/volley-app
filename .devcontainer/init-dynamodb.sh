#!/bin/bash

echo "Aguardando DynamoDB Local iniciar..."
sleep 5

# Criar tabela de usuários
aws dynamodb create-table \
  --table-name volley-app-backend-users-dev \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --endpoint-url http://dynamodb-local:8000 \
  --region us-east-1 \
  2>/dev/null

if [ $? -eq 0 ]; then
  echo "✓ Tabela 'users' criada com sucesso no DynamoDB Local"
else
  echo "✓ Tabela 'users' já existe no DynamoDB Local"
fi