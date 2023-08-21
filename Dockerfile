FROM node:20.1.0

WORKDIR /app

# Установка переменных окружения

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 4390

CMD ["npm", "run", "start"]