# Use ARM-compatible Nginx base image for Raspberry Pi
FROM --platform=linux/arm64 nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output into Nginx html directory
COPY ./dist/posui/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx (handled by base image entrypoint)
