import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// PerformanceCard.tsx
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import { Button, Card, Stack } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
const PerformanceCard = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(Card, { children: _jsx(Card.Body, { children: _jsxs(Stack, { direction: "horizontal", className: "justify-content-between", children: [_jsxs("div", { className: "py-2", children: [_jsx("h5", { children: "Performance Goal" }), _jsx("p", { className: "fs-13 text-muted text-truncate col", children: "Monthly performance reports" }), _jsxs("div", { className: "mt-16", children: [_jsxs("h3", { className: "fs-14 text-muted mb-1", children: [_jsx("span", { children: "Sales: " }), _jsx("span", { className: `fs-18 fw-bold text-primary mb-2 d-inline-block`, children: "$5.65K" })] }), _jsx(Button, { variant: "primary", className: "btn-md", children: "View Reports" })] })] }), _jsx(CircularProgressbar, { value: 60, text: `${60}%`, styles: {
                            root: {
                                height: '8rem',
                                width: '8rem',
                            },
                            path: {
                                stroke: themeColor,
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
                                fill: themeColor,
                            },
                        } })] }) }) }));
};
export default PerformanceCard;
