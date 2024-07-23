# Stage 1: Build the Angular application
FROM node:14-alpine as build
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /dist/angular10 /usr/share/nginx/html
