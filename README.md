# CursorApp

A modern React application built with Cursor IDE, featuring authentication, profile management, and a clean component structure.

## About
Playing around with Cursor to see what we can build! This project demonstrates the power of modern development tools and React best practices.

## Features

- User authentication (login/register)
- Profile management
- Protected routes
- Responsive design
- Modern UI components

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bryantheil/CursorApp.git
cd CursorApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```
REACT_APP_API_BASE_URL=http://localhost:3000/api
```

## Running the Application

To start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

```
CursorApp/
├── public/                  # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages
│   ├── models/            # Data models
│   ├── services/          # API services
│   ├── utils/             # Utility functions
│   └── App.js             # Root component
└── package.json           # Project dependencies
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
