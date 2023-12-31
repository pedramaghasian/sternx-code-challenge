# Task Management System

This repository contains the implementation of a simple web application for managing tasks in a company, following a micro-service architecture. The main components of the system are a BFF (Backend For Frontend) codenamed Nashville, a Task Manager micro-service named Gallatin, and a Logger micro-service with the codename Ashland.

## Architecture Overview

- **Nashville BFF:** Responsible for handling REST and WebSocket communication. Interacts with the Gallatin micro-service via GRPC.

- **Gallatin Micro-service:** Manages the logic of task operations. Emits all logical events to the Ashland micro-service. Implements features such as creating, updating, and deleting tasks.

- **Ashland Micro-service:** Logs events to the console or another designated place in the future. Receives logical events from the Gallatin micro-service.

All microservices are connected to a RabbitMQ message broker to facilitate communication.

## Task Logic

The product owner requires the following logic for tasks:

- **Task Attributes:**
  - `id`: UUID
  - `ParentId`: UUID (nullable, representing the parent task)
  - `title`: String
  - `description`: Text
  - `createdAt`: Date or Timestamp (auto-generated by ORM)
  - `updatedAt`: Date or Timestamp (auto-generated by ORM)

- **Functionality:**
  - Create and update a task with the specified attributes.
  - Every task can have a parent task. A root task has a null parentId.
  - Paginated list of tasks (complicated pagination in the tree is not needed).
  - Delete a specific task by its id.

## Technical Details

The technical lead has planned the following:

- **Language and Frameworks:**
  - NodeJS, NestJS & TypeScript in all components (BFF, microservices).

- **Architectural Patterns:**
  - Clean Architecture

- **Database:**
  - MySQL

- **ORM (Object-Relational Mapping):**
  - TypeORM

- **Message Broker:**
  - RabbitMQ
  
- **Documentation:**
  - Swagger

## Future Work
- **Dockerization:**
  - Dockerize the entire project including the BFF, microservices (Nashville, Gallatin, Ashland), and their dependencies.
   Provide Dockerfiles and Docker Compose configuration for easy deployment.