# Full Stack Internship Repository

This repository is a collection of daily practice work, mini tasks, UI exercises, and React learning projects completed during a full stack internship. It contains both standalone HTML/CSS/JavaScript files and a larger React application built with Vite.

## Repository Overview

The codebase is organized as a learning workspace rather than a single production app. Each folder focuses on a specific concept such as forms, DOM manipulation, layouts, theming, shopping UI design, or React component patterns.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- React 19
- Vite
- React Router
- Material UI
- styled-components
- Bootstrap
- Font Awesome

## Folder Structure

```text
fullstack-internship/
|-- calculator/
|   `-- calculator.html
|-- dom/
|   `-- dom.html
|-- form/
|   `-- form.html
|-- img/
|   |-- Berserk.jpg
|   |-- bg.jpg
|   |-- blue.png
|   |-- modiji.png
|   |-- payment.png
|   |-- pink.png
|   `-- top.png
|-- js/
|   `-- internal_js.html
|-- notes & codes/
|   |-- beginner codes/
|   |   |-- bootstrap.html
|   |   |-- index.html
|   |   `-- tables.html
|   `-- css example/
|       |-- inline-style.html
|       |-- internal-style.html
|       |-- page1.html
|       |-- page2.html
|       `-- style.css
|-- React/
|   `-- project/
|       |-- src/
|       |   |-- assets/
|       |   |-- components/
|       |   |-- es/
|       |   |-- mui/
|       |   `-- pages/
|       |-- index.html
|       |-- package.json
|       |-- vite.config.js
|       `-- README.md
|-- Tak 3/
|   `-- shopping.html
|-- Task 1/
|   `-- task1.html
|-- Task 2/
|   |-- employee.html
|   `-- payment-form.html
|-- theme/
|   `-- dark-light-theme.html
|-- webpage/
|   |-- css/
|   |   `-- index.css
|   |-- images/
|   `-- index.html
`-- README.md
```

## Projects and Exercises

### 1. `React/project`

The main React learning project in this repository. It uses Vite for development, React Router for navigation, and Material UI for interface components.

Current routes in `src/App.jsx`:

- `/` renders the home page with a hero image and category cards
- `/myform` renders a simple form with table output
- `/products` renders a Material UI product form that creates product cards

Important folders:

- `src/components/` reusable UI experiments such as cards, category blocks, navbar variants, hooks practice, and MUI form/card components
- `src/pages/` route-level pages used by the app
- `src/mui/` Material UI practice components and product demo screens
- `src/es/` ES6 practice files for variables, arrow functions, destructuring, spread, and map
- `src/assets/` static assets used by the React app

See [React/project/README.md](React/project/README.md) for app-specific setup details.

### 2. `calculator/`

Contains a simple calculator interface built with HTML, CSS, and inline JavaScript.

Features:

- Number and operator buttons
- Read-only display field
- Clear button
- Calculation using `eval()`

### 3. `dom/`

DOM manipulation practice file with examples of:

- `getElementById`, `getElementsByTagName`, and `getElementsByClassName`
- changing styles and content dynamically
- event handling with `onclick`, `onmouseover`, `onchange`, and `onsubmit`
- reading input values and calculating totals

### 4. `form/`

Basic HTML registration form demonstrating:

- text, email, password, tel, number, date, and time inputs
- radio buttons and checkboxes
- select dropdowns
- file upload
- submit and reset actions

### 5. `js/`

Contains JavaScript practice in `internal_js.html`. This folder is useful for basic script embedding and browser-side JS exercises.

### 6. `notes & codes/`

A collection of beginner examples and CSS practice files.

`beginner codes/`

- `bootstrap.html`: Bootstrap practice page
- `index.html`: basic HTML exercise
- `tables.html`: table structure practice

`css example/`

- `inline-style.html`: inline CSS example
- `internal-style.html`: internal stylesheet example
- `page1.html` and `page2.html`: linked page examples
- `style.css`: external stylesheet used by the CSS examples

### 7. `Tak 3/`

Contains `shopping.html`, a shopping cart UI mockup built mostly with inline styles.

Highlights:

- product rows with quantity controls
- order summary blocks
- promo code area
- action buttons for shop and checkout
- image assets sourced from the top-level `img/` folder

### 8. `Task 1/`

Contains `task1.html`, a timetable table exercise using `rowspan`, `colspan`, and HTML table attributes.

### 9. `Task 2/`

Contains two UI practice files:

- `employee.html`: employee management dashboard layout with table, actions, and pagination styling
- `payment-form.html`: checkout/payment form with billing and card details

### 10. `theme/`

Contains `dark-light-theme.html`, a basic JavaScript toggle for switching the page background between light and dark modes.

### 11. `webpage/`

A larger static storefront-style page inspired by an e-commerce landing page.

Highlights:

- Bootstrap-based navigation and layout
- hero banners and promotional sections
- carousel section
- sale/product cards
- feature cards
- structured footer
- custom CSS in `webpage/css/index.css`
- supporting images in `webpage/images/`

### 12. `img/`

Shared image assets used by some standalone HTML tasks such as the shopping cart and payment form.

## How To Run

### Static HTML projects

Most folders in this repository are standalone browser exercises. You can run them by opening the corresponding `.html` file directly in a browser.

Examples:

- `calculator/calculator.html`
- `dom/dom.html`
- `form/form.html`
- `Tak 3/shopping.html`
- `Task 2/payment-form.html`
- `webpage/index.html`

### React app

To run the React app locally:

```bash
cd React/project
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

Other available scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Learning Areas Covered

- HTML forms and tables
- CSS layouts and styling methods
- DOM manipulation
- event handling
- simple JavaScript calculations
- theme toggling
- Bootstrap layouts
- React routing
- React state management with `useState`
- Material UI components
- reusable component structure

## Notes

- This repository mixes polished UI tasks with concept practice files, so naming and structure reflect day-to-day learning rather than a single unified product.
- The React app includes generated dependencies locally. If cloning the repository fresh, running `npm install` inside `React/project` is still the safest setup step.

## Suggested GitHub Description

`Daily full stack internship tasks covering HTML, CSS, JavaScript, DOM practice, Bootstrap layouts, and a React + Vite learning project.`
