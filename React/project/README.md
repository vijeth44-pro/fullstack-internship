# React Learning Project

This project is a React + Vite practice application created as part of the internship repository. It combines routing, form handling, reusable components, Material UI experiments, and ES6 concept demos in one workspace.

## Stack

- React 19
- Vite
- React Router
- Material UI
- styled-components
- ESLint

## Available Scripts

```bash
npm install
npm run dev
```

Additional scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Current Routes

Defined in `src/App.jsx`:

- `/` - home page with hero banner and category cards
- `/myform` - simple form that stores entries in local component state and displays them in a table
- `/products` - Material UI product form that creates product cards from submitted input

## Source Structure

```text
src/
|-- assets/
|-- components/
|-- es/
|-- mui/
|-- pages/
|-- App.css
|-- App.jsx
|-- index.css
`-- main.jsx
```

### `src/components/`

Contains reusable and practice-oriented components such as:

- `Category.jsx`
- `Navbar.jsx`
- `Navbar1.jsx`
- `Muiform.jsx`
- `Muicard.jsx`
- `hooks.jsx`
- additional card and home experiments

### `src/pages/`

Route-level components used by the router:

- `Home.jsx`
- `form.jsx`
- `taskcard.jsx`

### `src/mui/`

Material UI demo components, including product and card UIs:

- `MuiComponents.jsx`
- `Products.jsx`
- `ButtonDemo.jsx`
- `Card.jsx`

### `src/es/`

Small ES6 practice files:

- `variables.jsx`
- `arrow.jsx`
- `destructuring.jsx`
- `spread.jsx`
- `map.jsx`

## What This Project Demonstrates

- React component composition
- `useState` for form and UI state
- browser routing with `react-router-dom`
- Material UI form fields, cards, buttons, and layout components
- basic page structuring for a multi-page React app

## Notes

- Some imported demo files are not currently mounted in the router but remain in the project as learning references.
- The UI uses a mix of custom styles and Material UI components because this project is meant for experimentation and practice.
