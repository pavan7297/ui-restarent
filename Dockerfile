# Dockerfile
FROM nginx:alpine
COPY dist/posui/browser /usr/share/nginx/html
EXPOSE 80
