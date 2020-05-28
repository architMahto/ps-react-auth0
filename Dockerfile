# Specify base image
FROM node:12.17-alpine

# Specify working directory
WORKDIR /app

# Install dependencies and build app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent
COPY ./ ./
RUN npm run build

# Default command
CMD ["npm", "start"]