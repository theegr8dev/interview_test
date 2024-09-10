import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyForm from './myForm';
import GetFormData from './getFormData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyForm />
    </React.StrictMode>
);
