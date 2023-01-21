import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
import ContextProvider from './Context/AuthContext';
import AdminContextProvider from './Context/AdminAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider>
    <AdminContextProvider>
    <ContextProvider>
    <BrowserRouter>
      
         <App />
     
      
      </BrowserRouter>
      </ContextProvider>
    </AdminContextProvider>
    
  </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
