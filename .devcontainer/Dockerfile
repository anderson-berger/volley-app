FROM node:lts-bullseye

# Instalar dependências do sistema como root
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    nano \
    awscli \
    jq \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Adicionar usuário node ao grupo sudoers (sem senha)
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Mudar para usuário node
USER node

# Diretório de trabalho
WORKDIR /workspace

# Manter container rodando
CMD ["sleep", "infinity"]