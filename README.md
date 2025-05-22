# Prisma
=======
# ORM Project

## Overview
This project demonstrates basic CRUD operations using Prisma ORM with a MySQL database. It includes models for `User` and `Post` with a defined relationship.

## Features
- **Create**: Add new users and posts to the database.
- **Read**: Retrieve users and posts, including relational data.
- **Update**: Modify existing user data.
- **Delete**: Remove users from the database.

## Usage
1. Ensure you have a MySQL database running and update the `DATABASE_URL` in the `.env` file.
2. Run `npm install` to install dependencies.
3. Execute `node index.cjs` to run the CRUD operations.

## Additional Features
- **Migration**: Use Prisma Migrate to manage your database schema.
- **Seeding**: Add initial data to your database using Prisma Seed.

## Prisma Schema
The `schema.prisma` file defines the data models and their relationships.

## Error Handling
Errors during database operations are logged to the console.

## Disconnect
The Prisma client disconnects from the database after operations are complete to prevent open connections.