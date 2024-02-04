# Use the official Node.js 20 image.
# https://hub.docker.com/_/node
FROM node:20-alpine as build

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm ci

# Copy the src, public directories and configuration files to the working directory
COPY src/ ./src/
COPY public/ ./public/
COPY vite.config.js ./
COPY .eslintrc.cjs ./
COPY .prettierrc.json ./
COPY jsconfig.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY index.html ./
COPY data/ ./data/

# Build the application
RUN npm run build

# Start a new stage for running the application
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Install serve to run your application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Run the web service on container startup.
CMD [ "serve", "-s", "dist", "-l", "5000"]