---
title: 'Boilerplate-NextJS-ShadCN UI'
date: '2023-05-20'
description: 'A modern, scalable full-stack application boilerplate built with Next.js and Tailwind CSS. This project integrates key frontend and backend features, making it ideal for starting web applications that require role-based access control and user authentication.'
---

A modern, scalable full-stack application boilerplate built with Next.js and Tailwind CSS. This project integrates key frontend and backend features, making it ideal for starting web applications that require role-based access control and user authentication.

## Features

- Backend API Integration: Easily integrate backend APIs with axios interceptors for secure API communication.
- Tailwind CSS: Responsive and customizable UI styling with Tailwind CSS.
- ShadCN UI: Components and design system powered by ShadCN UI for beautiful and accessible UI components.
- TypeScript: Strongly typed JavaScript for better development experience.
- NextAuth: Seamless authentication setup for user login and logout.
- CASL.js Role-based access control (RBAC) using CASL.js for flexible permission management.
- System Layout: Includes a layout with common system components.

## Prerequisites

    Make sure you have the following installed:

    Node.js (>=18.x or <=20.x)
    pnpm (>=9.x)

## Installation

1. Clone the repository:

    ```bash
    git clone [<repo_url>](https://github.com/LIT-SOULUTION/Boilerplate-NextJS-ShadCN.git)

    cd Boilerplate-NextJS-ShadCN
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```
3. Basic Settings

    Create a .env file in the root of your project with the following content:

    ```bash
    NEXTAUTH_URL=http://127.0.0.1:3000
    NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
    NEXT_PUBLIC_NEXTAUTH_URL=http://127.0.0.1:3000
    AUTH_SECRET=80e4e5b50b83c0306e96cdxxxxxxxxxxxxxxxxxxx
    ```

## Running the Application

To run the application in development mode:

    ```bash
    pnpm run dev
    
    Go to http://localhost:3000/
