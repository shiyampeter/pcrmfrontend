import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const AnalyticProgress = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Card, { className: "mb-3 mb-md-4", children: _jsxs(Card.Body, { className: "hstack gap-4", children: [_jsx(CircularProgressbar, { value: 62, text: `${62}%`, styles: {
                                root: {
                                    height: '8rem',
                                    width: '8rem',
                                },
                                path: {
                                    stroke: '#25b865',
                                    strokeWidth: '0.375rem',
                                    strokeLinecap: 'round',
                                },
                                trail: {
                                    stroke: '#EDEFF1',
                                    strokeWidth: '0.15rem',
                                },
                                text: {
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fill: '#25b865',
                                },
                            } }), _jsxs("div", { children: [_jsx("h4", { children: "08m : 36s" }), _jsx("h6", { children: "Time to resolved complaint" }), _jsx("p", { className: "fs-13 text-muted mb-0", children: "The average time taken to resolve complaints." })] })] }) }), _jsx(Card, { className: "mb-3 mb-md-4", children: _jsxs(Card.Body, { className: "hstack gap-4", children: [_jsx(CircularProgressbar, { value: 66, text: `${66}%`, styles: {
                                root: {
                                    height: '8rem',
                                    width: '8rem',
                                },
                                path: {
                                    stroke: '#e49e3d',
                                    strokeWidth: '0.375rem',
                                    strokeLinecap: 'round',
                                },
                                trail: {
                                    stroke: '#EDEFF1',
                                    strokeWidth: '0.15rem',
                                },
                                text: {
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fill: '#e49e3d',
                                },
                            } }), _jsxs("div", { children: [_jsx("h4", { children: "04m : 32s" }), _jsx("h6", { children: "Average speed of answer" }), _jsx("p", { className: "fs-13 text-muted mb-0", children: "The average time taken to resolve complaints." })] })] }) }), _jsx(Card, { className: "mb-0", children: _jsxs(Card.Body, { className: "hstack gap-4", children: [_jsx(CircularProgressbar, { value: 56, text: `${56}%`, styles: {
                                root: {
                                    height: '8rem',
                                    width: '8rem',
                                },
                                path: {
                                    stroke: '#3E97FF',
                                    strokeWidth: '0.375rem',
                                    strokeLinecap: 'round',
                                },
                                trail: {
                                    stroke: '#EDEFF1',
                                    strokeWidth: '0.15rem',
                                },
                                text: {
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    fill: '#3E97FF',
                                },
                            } }), _jsxs("div", { children: [_jsx("h4", { children: "05m : 22s" }), _jsx("h6", { children: "Agerage time on site spent" }), _jsx("p", { className: "fs-13 text-muted mb-0", children: "The average time taken to resolve complaints." })] })] }) })] }));
};
export default AnalyticProgress;
