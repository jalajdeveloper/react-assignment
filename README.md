# My App - React with TypeScript, Axios, and Styled Components

This is a sample React application built with TypeScript and styled using Styled Components. Axios is used for fetching data from a dummy API to display posts and user information.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Project Overview

The app fetches and displays the first 10 posts from a dummy API in a grid layout, with each post card showing:
1. The post's title and body.
2. The user’s first and last name (fetched using the `userId` from each post).

This setup demonstrates a scalable project structure that separates concerns between components, hooks, and types.

## Features
- **React with TypeScript**: Provides a strongly-typed, maintainable codebase.
- **Styled Components**: A CSS-in-JS library that helps to manage component styles.
- **Axios**: A powerful HTTP client for API requests.
- **Custom Hooks**: Separate data-fetching logic from UI components for better code organization.

## Folder Structure

The project uses a modular folder structure, keeping each component, hook, and type file organized:

```plaintext
src
├── components              // Reusable components
│   └── PostCard            // PostCard component for displaying individual posts
│       ├── PostCard.tsx    // PostCard component logic
│       └── PostCard.styles.ts  // Styled components for PostCard
├── hooks                   // Custom hooks (e.g., data fetching)
│   └── useFetchPosts.ts    // Custom hook to fetch posts and users data
├── types                   // TypeScript interfaces and types
│   └── index.ts            // Centralized TypeScript interfaces
├── App.tsx                 // Main App component
└── index.tsx               // Main entry point
