# Next.js + Tailwind + Storybook Template

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Available Scripts](#available-scripts)
6. [Directory Details](#directory-details)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
This template represents my best practices for Next.js projects, integrating Tailwind CSS and Storybook. It's the result of numerous projects and continuous refinement. The directory structure and setup are designed to enhance productivity and maintainability based on real-world experience. Use this to kickstart your project with a battle-tested foundation.

## Project Structure
```bash
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── users/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   └── api/
│       ├── users/
│       │   └── route.ts
│       └── products/
│           └── route.ts
├── components/
│   ├── elements/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── layouts/
│       ├── MainLayout.tsx
│       └── Sidebar.tsx
├── features/
│   ├── users/
│   │   ├── components/
│   │   └── hooks/
│   └── products/
│       ├── components/
│       └── hooks/
├── hooks/
├── utils/
├── libs/
└── types/
```
## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/junya-thinkactive-d/nextjs-tailwind-storybook-template.git
cd nextjs-tailwind-storybook-template
pnpm install
```

## Usage

To start the development server:

```bash
pnpm dev
```

To build the project:
```bash
pnpm build
```
To start Storybook:
```bush
pnpm storybook
```
## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm storybook`: Starts Storybook.
- `pnpm build-storybook`: Builds the Storybook for production.

## Directory Details

### `components` Directory

- **Purpose:** Contains reusable UI components.
- **Features:**
  - Composed of smaller parts such as buttons and inputs (`elements`).
  - Includes layout components like main layout and sidebar (`layouts`).

### `hooks` Directory

- **Purpose:** Contains custom hooks for state management and side effects.
- **Features:**
  - Encourages logic reuse.
  - Promotes separation of concerns and ease of testing.

### `utils` Directory

- **Purpose:** Contains utility functions.
- **Features:**
  - High reusability.
  - Pure functions without side effects.
  - Easy to test.

### `libs` Directory

- **Purpose:** Handles integration with external services and APIs.
- **Features:**
  - Encapsulates complex logic.
  - Independently testable modules.

### `features` Directory

- **Purpose:** Groups code related to specific features or domains.
- **Features:**
  - Contains components, hooks, and state management for each feature.
  - Improves scalability and manageability in large applications.

### `types` Directory

- **Purpose:** Stores type definitions used throughout the project.
- **Features:**
  - Centralizes type definitions.
  - Enhances code completion and type checking.

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

