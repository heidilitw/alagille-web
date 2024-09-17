### README

## Running the Docker Setup

Follow these steps to build and run the Docker container for your Flask and React application.

### Prerequisites

- Docker installed on your machine

### Steps

1. **Build the Docker image**:
    ```sh
    docker build -t my-flask-react-app .
    ```

2. **Run the Docker container**:
    ```sh
    docker run -p 80:80 my-flask-react-app
    ```

This will build the Docker image and run the container, exposing the application on port 80.

### Dockerfile Explanation

The `Dockerfile` is divided into two stages:

1. **Build React app**:
    - Uses the `node:14` image.
    - Copies the React app source code.
    - Installs dependencies and builds the React app.

2. **Set up Flask app**:
    - Uses the `python:3.9-slim` image.
    - Installs Python dependencies.
    - Copies the Flask app source code.
    - Copies the built React app from the previous stage.
    - Exposes port 80 and sets environment variables.
    - Runs the Flask app using Gunicorn.

### Additional Information

- The Flask app is run using Gunicorn on port 80.
- Ensure that the `requirement.yaml` file contains all necessary Python dependencies.