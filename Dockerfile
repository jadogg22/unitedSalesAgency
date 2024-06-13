# Stage 1: Build Stage
# Use an official Node.js runtime as a parent image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend application code
COPY frontend ./

# Build your Vite application
RUN npm run build

# Stage 2: Production Stage
# Use an official lightweight Node.js 14 image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built frontend assets from the build stage
COPY --from=build /app/dist ./dist

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]

