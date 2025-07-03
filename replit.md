# Vajeenth's Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Vajeenth Vasanthakumar, a Business Analyst and UI/UX Designer. The application showcases his professional experience, skills, projects, and educational background through an interactive single-page application.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod for runtime type checking
- **Session Management**: PostgreSQL-based session storage

### Design System
- **Component Library**: shadcn/ui with "new-york" style variant
- **Color Scheme**: Custom portfolio colors (navy, charcoal, gold, light-gray)
- **Typography**: Responsive design with mobile-first approach
- **Animations**: CSS transitions and intersection observer-based animations

## Key Components

### Frontend Components
1. **Portfolio Page**: Main landing page with all sections
2. **Navigation**: Smooth scrolling navigation with glass effect
3. **Hero Section**: Professional introduction with call-to-action buttons
4. **About Section**: Professional background and statistics
5. **Skills Section**: Technical and business skills with progress indicators
6. **Projects Section**: Featured project showcase with technology badges
7. **Education Section**: Academic timeline and certifications
8. **Contact Section**: Contact form with form validation
9. **Footer**: Professional links and contact information

### Backend Services
1. **Contact API**: Form submission endpoint with validation
2. **File Download**: CV download functionality
3. **Static Asset Serving**: Profile images and documents
4. **Database Storage**: Contact message persistence

### Database Schema
```sql
-- Users table (for potential future authentication)
users {
  id: serial primary key
  username: text unique not null
  password: text not null
}

-- Contact messages from the website
contact_messages {
  id: serial primary key
  name: text not null
  email: text not null
  subject: text
  message: text not null
  created_at: timestamp default now()
}
```

## Data Flow

1. **User Interaction**: User navigates through portfolio sections or submits contact form
2. **Frontend Processing**: React components handle user interactions with proper validation
3. **API Communication**: TanStack Query manages server communication for form submissions
4. **Backend Processing**: Express routes handle API requests with Zod validation
5. **Database Operations**: Drizzle ORM manages contact message storage
6. **Response Handling**: Frontend displays success/error notifications using toast system

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Tailwind CSS, shadcn/ui
- **Backend Stack**: Express.js, Drizzle ORM, Zod validation
- **Database**: Neon Database (PostgreSQL), connect-pg-simple for sessions
- **Build Tools**: Vite, ESBuild, TypeScript
- **Development**: tsx for TypeScript execution, various type definitions

### Third-Party Services
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **Asset Storage**: Local file system for CV and profile images
- **Icon Libraries**: Lucide React, React Icons (Font Awesome)

### Development Tools
- **Linting/Formatting**: TypeScript compiler for type checking
- **Package Management**: npm with lockfile for dependency consistency
- **Environment**: Replit-specific plugins for development experience

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema changes
4. **Asset Preparation**: Static assets copied to appropriate directories

### Environment Configuration
- **Development**: Uses tsx for hot reloading and development server
- **Production**: Compiled JavaScript served by Node.js
- **Database**: Environment variable `DATABASE_URL` for connection
- **File Serving**: Static file serving for built assets and uploaded files

### Hosting Requirements
- Node.js environment with PostgreSQL database access
- File system access for CV downloads and profile images
- Environment variables for database connection
- HTTPS support for production deployment

## Changelog
```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```