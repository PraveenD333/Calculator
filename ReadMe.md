# React Calculator

A modern calculator application built with React, Vite, and TailwindCSS. The calculator supports basic arithmetic operations with a clean, responsive interface.

## Features

- Basic arithmetic operations (+, -, *, /)
- Percentage calculations
- Clear function
- Decimal number support
- Responsive design
- Error handling
- Clean and modern UI with hover effects

## Technologies Used

- React 19
- Vite 7
- TailwindCSS 3
- Math.js (for calculations)

## Project Structure

```
Calculator/
├── src/
│   ├── Components/
│   │   ├── Calculator.jsx
│   │   └── Ok.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## Features Implementation

- **State Management**: Uses React's useState hook for managing calculator state
- **Error Handling**: Prevents division by zero and invalid operations
- **Responsive Design**: Adapts to different screen sizes using TailwindCSS
- **Input Validation**: Handles decimal points and operator input validation