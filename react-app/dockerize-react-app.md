# Dockerize React app

To dockerize a React application, follow these steps:

### Step 1: Create a Dockerfile

Create a file named `Dockerfile` in the root directory of your React application with the following content:
The code is in the Dockerfile shown above in the Docker Devops section.

### Step 2: Create a .dockerignore file

Create a file named `.dockerignore` in the root directory of your React application to exclude unnecessary files from the Docker image. Add the following content:

```node_modules/

```

### Step 3: Build the Docker image

Open a terminal in the root directory of your React application and run the following command to build the Docker image:

```bash
docker build -t my-react-app .
```

### Step 4: Run the Docker container

Run the following command to start a container from the Docker image:

```bash
docker run -p 3000:3000 my-react-app
```

This command maps port 3000 of the container to port 3000 on your host machine, allowing you to access the React application in your web browser at `http://localhost:3000`.
but note that with the current setup, Vite's development server binds to localhost by default, which means it won't be accessible from outside the container. To fix this, you need to modify the `dev` script in your `package.json` to bind to all network interfaces.

### Step 5: Modify the `dev` script in `package.json`

In your `package.json`, change the `dev` script to:

```json
"dev": "vite --host",
```

This change allows Vite to listen on all network interfaces, making it accessible from outside the Docker container.

### Step 6: Rebuild and rerun the Docker container

After modifying the `package.json`, rebuild the Docker image and run the container again:

```bash
docker build -t my-react-app .
docker run -p 3000:3000 my-react-app
```

# How to active HMR in Docker

To enable Hot Module Replacement (HMR) in a Dockerized React application using Vite, you need to ensure that the Vite development server is properly configured to watch for file changes. This can be achieved by modifying the Vite configuration file (`vite.config.ts` or `vite.config.js`) to include polling for file changes. Here's how you can do it:

1. Open your `vite.config.ts` or `vite.config.js` file.
2. Add the following configuration to enable polling:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
        usePolling: true
        }
    }
})
```

This configuration tells Vite to use polling to watch for file changes, which is necessary when running inside a Docker container, as file system events may not be detected correctly.
3. Save the changes to the Vite configuration file.
4. Rebuild your Docker image to include the updated configuration:
5. Run the Docker container again

# Pulish the image to Docker Hub
```bash
docker login
docker tag my-react-app your-dockerhub-username/my-react-app:latest
docker push your-dockerhub-username/my-react-app:latest
```