FROM node:18.16.1

WORKDIR /app

# Install your project dependencies
COPY package*.json ./
RUN npm install

# Copy your application files
COPY . .

# Install 'serve' globally
RUN npm install -g serve

# Build and run your application
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]