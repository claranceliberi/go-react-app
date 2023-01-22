FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["yarn", "dev"]
