# Use the official Node.js image as the base image
FROM node:14-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that your Node.js application will listen on
EXPOSE 3000

# Set the command to start your Node.js application
CMD ["npm", "start"]
