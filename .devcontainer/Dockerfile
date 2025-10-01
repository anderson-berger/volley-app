FROM node:lts-bullseye

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    nano \
    awscli \
    jq \
    && rm -rf /var/lib/apt/lists/*

# Configurar usuário node
USER node

# Diretório de trabalho
WORKDIR /workspace

# Manter container rodando
CMD ["sleep", "infinity"]
