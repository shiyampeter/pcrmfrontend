import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from 'react-bootstrap';
const Preloader = () => {
    return (_jsx(Card, { className: "d-flex align-items-center justify-content-center flex-grow-1 rounded-3 h-100 w-100 border-0 z-1090 ", children: _jsx("div", { className: "preloader" }) }));
};
const PreloaderFull = () => {
    return (_jsx(Card, { className: "d-flex align-items-center justify-content-center flex-grow-1 rounded-3 vh-100 w-100 position-absolute border-0 z-1090", children: _jsx("div", { className: "preloader" }) }));
};
export { Preloader, PreloaderFull };
