import React from 'react';
// import ReactDOM from 'react-dom/client'
import { render } from 'react-dom'
import { CartProvider } from 'react-use-cart';
// import { BrowserRouter } from 'react-browser-dom'
import App from './App'
import { ThemeProvider } from './GlobalComponents/ThemeProvider';

render(
    <React.StrictMode>
        <ThemeProvider>
            <CartProvider>
              <App />  
            </CartProvider>
            
        </ThemeProvider>
    </React.StrictMode>, document.getElementById('root'));

