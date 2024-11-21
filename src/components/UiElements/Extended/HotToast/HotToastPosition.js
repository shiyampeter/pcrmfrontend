import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
const notificationPositions = [
    { position: 'top-left', label: 'top-left' },
    { position: 'top-center', label: 'top-center' },
    { position: 'top-right', label: 'top-right' },
    { position: 'bottom-left', label: 'bottom-left' },
    { position: 'bottom-center', label: 'bottom-center' },
    { position: 'bottom-right', label: 'bottom-right' },
];
const HotToastType = () => {
    const notifyPosition = (position) => {
        toast.success(`Position set to ${position}.`, { position });
    };
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: notificationPositions.map(({ position, label }, index) => (_jsx(Button, { variant: "primary", onClick: () => notifyPosition(position), children: label }, index))) }), _jsx(Toaster, { reverseOrder: false })] }));
};
export default HotToastType;
