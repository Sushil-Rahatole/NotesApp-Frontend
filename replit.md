# SPPU Notes & PYQs Hub

## Overview

This is a full-stack web application designed for SPPU (Savitribai Phule Pune University) students to access study materials and previous year question papers. The application provides a clean, educational interface with filtering capabilities for different academic years and semesters.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom SPPU brand colors
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reloading with Vite integration

### Project Structure
```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions and configurations
├── server/          # Express.js backend
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Development server configuration
├── shared/          # Shared code between frontend and backend
│   └── schema.ts    # Database schema and validation
└── migrations/      # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Validation**: Drizzle-zod integration for type-safe database operations
- **Migration System**: Drizzle Kit for database schema management

### Frontend Components
- **Header**: Navigation with mobile-responsive menu
- **Sidebar**: SPPU branding and university information
- **FilterSection**: Academic year and semester selection
- **SubjectsList**: Display of available subjects with descriptions
- **Footer**: Links and university information

### Data Storage
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer supporting multiple backends

### UI/UX Design
- **Design System**: Custom SPPU color palette (dark blue, gray, blue, green)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Toast Notifications**: User feedback system for actions

## Data Flow

1. **User Interaction**: Users interact with React components in the browser
2. **State Management**: TanStack Query handles API calls and caching
3. **API Layer**: Express.js routes process requests and validate data
4. **Data Access**: Storage interface abstracts database operations
5. **Database**: PostgreSQL stores persistent data via Drizzle ORM
6. **Response**: JSON responses flow back through the same path

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **@tanstack/react-query**: Server state management
- **drizzle-orm & drizzle-kit**: Type-safe database toolkit
- **wouter**: Lightweight React routing
- **class-variance-authority**: Component variant management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **react-hook-form**: Form state management

### Development Dependencies
- **vite**: Fast build tool and dev server
- **typescript**: Type safety across the stack
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite bundles React app with TypeScript compilation
2. **Backend Build**: ESBuild packages Node.js server with external dependencies
3. **Output**: Static files to `dist/public/` and server bundle to `dist/`

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Auto-reload with Vite HMR and nodemon-like functionality
- **Production**: Optimized builds with proper error handling

### Database Management
- **Schema Changes**: Drizzle Kit handles migrations with `npm run db:push`
- **Type Safety**: Schema changes automatically generate TypeScript types
- **Connection Pooling**: Neon serverless handles connection management

The application is designed for easy deployment on platforms like Replit, Vercel, or Railway with minimal configuration required beyond setting the database URL.