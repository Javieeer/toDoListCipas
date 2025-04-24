# Cipa Task Manager

Cipa Task Manager is a React application designed to help manage tasks for a specific group of Cipas. It allows users to list pending tasks, assign team members, provide links to work locations, and indicate task completion status.

## Features

- **Task Listing**: View all pending tasks in a user-friendly interface.
- **Team Member Assignment**: Assign tasks to specific team members.
- **Work Location Links**: Provide direct links to work locations for each task.
- **Completion Status**: Easily track the completion status of tasks.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cipa-task-manager.git
   ```

2. Navigate to the project directory:
   ```
   cd cipa-task-manager
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
This will open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:
```
npm run build
```
This will generate a `build` folder containing the optimized application.

## Folder Structure

```
cipa-task-manager
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Task.jsx
│   │   └── TaskList.jsx
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   └── TaskDetails.jsx
│   ├── styles
│   │   └── app.css
│   ├── utils
│   │   └── api.js
│   ├── App.jsx
│   ├── index.js
│   └── data
│       └── tasks.json
├── package.json
├── .gitignore
└── README.md
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.