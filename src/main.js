import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import App from './App';
import '../common.css';
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(_jsx(BrowserRouter, { basename: '', children: _jsx(App, {}) }));
}
