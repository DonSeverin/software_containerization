# Stage 1: Build React app
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D tailwindcss

COPY . .

RUN npm run build

FROM nginx:1.21.0-alpine
# Copy the ngnix.conf to the container
COPY ngnix.conf /etc/nginx/conf.d/default.conf
# Copy the React app build files to the container
COPY - from=build /app/build /usr/share/nginx/html
# Expose port 80 for Nginx
EXPOSE 80
# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
