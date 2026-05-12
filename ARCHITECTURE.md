# Project Architecture

This document describes the high-level architecture of the application.

## Overview
The project is built using a modern full-stack web architecture, separated into a client and a server. 

### Technology Stack
- **Client:** Angular
- **Server:** NestJS
- **Language:** TypeScript

## Client-Side Architecture (Angular)
The client is a single-page application built with Angular.

**Directory Structure (`client/src/app`):**
- `components/`: Contains Angular UI components that present the data and handle user interactions.
- `services/`: Contains Angular services responsible for business logic and communicating with the backend APIs.

## Server-Side Architecture (NestJS)
The backend is a RESTful API built with NestJS.

**Directory Structure (`server/src`):**
- `products/`: Module for handling product-related business logic and routes.
- `orders/`: Module for managing customer orders and order processing.
- `monitors/`: Module potentially used for system health checks or resource monitoring.
- `app.module.ts`: The root module of the application.
- `main.ts`: The entry file of the application which uses the core function `NestFactory` to create a Nest application instance.

## Communication
The Angular client communicates with the NestJS backend via HTTP requests. The backend exposes standard REST endpoints for managing resources like products and orders.
