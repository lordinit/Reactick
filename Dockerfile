FROM node:18.16.1


WORKDIR /app

# Install your project dependencies
COPY package*.json ./
RUN npm install

# Copy your application files
COPY . .

# Build and run your application
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]