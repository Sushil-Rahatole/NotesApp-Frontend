# StudyHub - Quality Notes & PYQs Platform

## Overview

StudyHub is a comprehensive educational platform that provides quality study materials and previous year question papers for university students. While initially focused on SPPU (Savitribai Phule Pune University), the platform is designed to expand across multiple universities. The application features an encouraging, student-friendly interface with comprehensive filtering capabilities including academic years, semesters, and pattern support.

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
- **Header**: Navigation with mobile-responsive menu and StudyHub branding
- **Sidebar**: University selection component (currently SPPU, expandable)  
- **FilterSection**: Academic year, semester, and pattern selection (2019/2024)
- **SubjectsList**: Display of available subjects with descriptions (defaults to FE Sem 1)
- **Footer**: Links and platform information

### Data Storage
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer supporting multiple backends

### UI/UX Design
- **Design System**: Educational color palette focused on encouraging student engagement
  - Primary Purple (#6B46C1): Used for main UI elements and branding
  - Primary Orange (#F97316): Used for highlights and call-to-action elements  
  - Accent Teal (#0D9488): Used for secondary actions and accents
  - Success Green (#059669): Used for positive feedback and completion states
  - Neutral tones for backgrounds and text
- **Psychology**: Colors chosen to stimulate learning, reduce stress, and encourage engagement
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

## Recent Changes (July 2024)

### Major Updates
1. **Rebranding**: Changed from "SPPU Notes & PYQs Hub" to "StudyHub - Quality Notes & PYQs"
   - Focus shifted from university-specific to quality-focused platform
   - Maintains SPPU as primary university while preparing for expansion

2. **Enhanced Color Psychology**: Implemented encouraging educational color scheme
   - Purple, orange, and teal gradients designed to stimulate learning
   - Warm background tones to reduce study stress
   - Colors chosen based on educational psychology principles

3. **Enhanced Filtering System**:
   - Added pattern selection (2019 Pattern, 2024 Pattern)
   - Set intelligent defaults: FE (First Year), Semester 1, 2019 Pattern
   - University selection dropdown (SPPU active, others marked as "Coming Soon")

4. **Improved User Experience**:
   - Default subject display shows FE Semester 1 subjects immediately
   - Gradient backgrounds and improved visual hierarchy
   - Enhanced mobile responsiveness with warm, inviting design

### User Preferences
- Simple, everyday language in communications
- Focus on student encouragement and accessibility
- Platform should feel welcoming and reduce academic stress