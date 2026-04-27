# Web Application

## 🚀 Prerequisites

Before you begin, ensure you have met the following requirements:

* **Node.js**: Version 14.x or higher (LTS recommended).

* **npm**: Node package manager (comes with Node.js).

* **Database**: Ensure your respective database (e.g., MongoDB, given standard Node data models) is running locally or accessible via URI.

## 🛠️ Installation

This repository is a monorepo-style setup containing a decoupled Angular frontend (`client`) and a Node.js/Express backend (`server`). You must install dependencies for both environments.

### 1. Server Setup

Navigate to the server directory and install dependencies:

```
cd server
npm install
```

### 2. Client Setup

Navigate to the client directory and install dependencies:

```
cd client
npm install
```

## 🚦 Running the Application

To run the application locally in development mode, open two separate terminal instances.

### Terminal 1: Start the Backend Server

```
cd server
npm start
```

*(Ensure any required `.env` variables like database URIs or ports are configured before starting).*

### Terminal 2: Start the Frontend Client

```
cd client
npm start
```

The Angular application will compile and typically serve on `http://localhost:4200/`. The client should automatically proxy or connect to the backend server.
