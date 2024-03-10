# Challenge: Displaying Star Wars Data with React

This is a simple single-page application (SPA) built with React that allows you to explore some data from the Star Wars API (SWAPI). Browse films and characters.

You can try it out live here: [swapi-react.luisfuturist.com](https://swapi-react.luisfuturist.com)

## Development Setup

### Prerequisites

- Node.js and npm (or pnpm) installed on your system.

### Installation

```bash
git clone https://github.com/luisfuturist/challenge-swapi-react.git
cd challenge-swapi-react/
npm install
```

### Scripts

Name | Script | Description
-----|---------|-----------------
`dev` | ```npm run dev``` | Enable source code watch and live-reload
`build` | ```npm run build``` | Build into `dist/`

## Technology Stack

This project utilizes a combination of modern frontend libraries and tools to deliver a smooth and interactive user experience.

* **Frontend:**
  * **JavaScript, TypeScript & TSX:** The core building blocks for the application logic and user interface. TypeScript provides static typing for improved code maintainability and developer experience.
  * **React & ReactDOM:** The foundation for building the user interface components. React allows for the creation of reusable and composable UI elements.
  * **Zustand:** A lightweight state management solution for managing application state in a centralized and predictable manner.
  * **React Query:** Facilitates managing asynchronous data fetching and provides features like caching and refetching for optimal performance.
  * **React Hook Form:** Simplifies form handling and validation within React components.
  * **React Use:** A collection of custom React hooks offering additional functionalities for common use cases.
  * **React Router:** Enables navigation between different views and components within the single-page application.
  * **react-multi-carousel:** Provides a customizable carousel component for displaying collections of data with a swiping or scrolling interface.
  * **Tailwind CSS:** A utility-first CSS framework offering rapid and responsive UI development.
  * **Moment.js:** A utility library for parsing, formatting, and manipulating date and time information.
* **Development Tools:**
  * **swapi-ts:** Type definitions for the SWAPI API, ensuring type safety and improved code reliability when interacting with the Star Wars data.
  * **Vite:** A lightning-fast development server and build tool that streamlines the development workflow with features like hot module replacement and efficient production builds.
