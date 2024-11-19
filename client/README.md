# Algorun - Frontend

**Algorun** is a full-stack online code compiler that supports multiple programming languages, providing real-time code execution, suggestions, and user-friendly interfaces for writing and testing code. This repository contains the frontend part of the application, built with **React**, **TailwindCSS**, and **ShadCN UI**.

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Technologies Used
- **React** - Frontend framework for building user interfaces.
- **TailwindCSS** - Utility-first CSS framework for styling.
- **ShadCN UI** - UI components to speed up development.
- **React Router** - For routing and navigation between pages.
- **Redux / Context API** - For state management.
- **Axios / Fetch API** - For making API calls.
- **Monaco Editor / CodeMirror** - For embedding a powerful code editor.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nainee99/algorun.git
   ```

2. Navigate to the project directory:
   ```bash
   cd client
   ```

3. Install dependencies using **npm** or **yarn**:
   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

Your app will be running at `http://localhost:5173`.

## Usage

- **Login/Signup**: Users can create accounts and log in to save their progress.
- **Code Editor**: The Monaco Editor is used for writing code in various programming languages.
- **Code Execution**: Users can execute the code written in the editor and view the output directly on the platform.
- **Code Suggestions**: Integration with the Gemini API provides intelligent code suggestions as you type.

---

## Folder Structure

Below is the project folder structure, showing the organization of components, hooks, services, and more:

```plaintext
/src
│
├── /assets                # Static assets (images, icons, etc.)
│   ├── /images            # Images (logos, backgrounds, etc.)
│   └── /icons             # Icons (SVGs, custom icons)
│
├── /components            # Reusable UI components (buttons, inputs, etc.)
│   ├── /ui                # UI Library Components (ShadCN UI components or custom)
│   │   ├── Button.js      # Button component from ShadCN UI or custom
│   │   ├── Input.js       # Input field component
│   │   └── Modal.js       # Modal component
│   │
│   ├── /forms             # Form-related components (Login, Signup, etc.)
│   │   ├── LoginForm.js   # Login form component
│   │   └── SignupForm.js  # Signup form component
│   │
│   ├── /layouts           # Layout components (Navbar, Sidebar, Footer, etc.)
│   │   ├── Navbar.js      # Navbar component
│   │   ├── Sidebar.js     # Sidebar component
│   │   └── Footer.js      # Footer component
│   │
│   ├── /editors           # Code editor components
│   │   ├── MonacoEditor.js # Monaco editor component
│   │   └── CodeOutput.js  # Component to display code output
│   │
│   └── /modals            # Modal components for dialogs (e.g., error, success)
│       ├── ErrorModal.js  # Modal for error display
│       └── SuccessModal.js# Modal for success display
│
├── /hooks                 # Custom React hooks
│   ├── useAuth.js         # Custom hook for authentication (login/logout)
│   ├── useCodeExecution.js # Custom hook to run code
│   └── useFetch.js        # Custom hook for API calls
│
├── /pages                 # Pages or views corresponding to routes
│   ├── Home.js            # Home page
│   ├── Login.js           # Login page
│   ├── Signup.js          # Signup page
│   ├── Dashboard.js       # User dashboard page
│   ├── CodeEditor.js      # Code editor page where users write and run code
│   └── NotFound.js        # 404 Not Found page
│
├── /services              # API services and logic
│   ├── api.js             # Central API service to handle API requests
│   ├── authService.js     # Authentication-related service (login, signup)
│   └── codeService.js     # Service to interact with code execution APIs
│
├── /store                 # State management (Redux or Context API)
│   ├── authSlice.js       # Redux slice or context for auth-related state
│   ├── themeSlice.js      # Redux slice or context for theme (dark/light mode)
│   └── codeSlice.js       # Redux slice or context for storing code state (code, language)
│
├── index.css              # Global CSS file for Tailwind and custom styles
│           
│
├── /utils                 # Utility functions and helper methods
│   ├── formatDate.js      # Date formatting utility function
│   ├── validators.js      # Validation functions for forms (e.g., email, password)
│   └── codeValidators.js  # Validation for code (e.g., syntax, errors)
│
├── App.js                 # Main entry component for routing and layout
├── index.js               # Entry point for React app (renders App component)
├── tailwind.config.js     # TailwindCSS configuration
└── package.json           # Project metadata, dependencies, scripts
```

---

## Key Features

1. **Authentication**: Login and signup forms with validation and user session management.
2. **Code Editor**: A Monaco-based code editor for writing code in various languages.
3. **Code Execution**: The ability to run code and see results in real-time, supporting multiple programming languages.
4. **Code Suggestions**: Integration with the Gemini API for real-time code suggestions.
5. **Theming**: Dark and light mode support using the state management system.
6. **Responsive Layout**: The layout is fully responsive for a smooth user experience across devices.

---

## Contributing

If you want to contribute to this project, feel free to submit issues or pull requests. Please follow the project's coding standards and guidelines. For major changes or features, open an issue first to discuss it with the team.

