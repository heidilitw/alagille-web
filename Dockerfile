# Stage 1: Build React app
FROM node:14 AS react-build

WORKDIR /app

# Copy React app source code
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/ ./

# Build the React app
RUN npm run build

# Stage 2: Set up Flask app
FROM python:3.9-slim AS flask-build

WORKDIR /app

# Install Python dependencies
COPY requirement.yaml .
RUN pip install --no-cache-dir -r requirement.yaml

# Copy Flask app source code
COPY . .

# Copy built React app from the previous stage
COPY --from=react-build /app/build /app/client/build


# Expose port 80 for Azure App Service (use port 80 for Azure)
EXPOSE 80

# Set environment variables for Azure
ENV PORT=80

# Command to run the Flask app using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:80", "app:app"]