import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notificationPositions = [
    { position: toast.POSITION.TOP_LEFT, label: 'Top Left' },
    { position: toast.POSITION.TOP_CENTER, label: 'Top Center' },
    { position: toast.POSITION.TOP_RIGHT, label: 'Top Right' },
    { position: toast.POSITION.BOTTOM_LEFT, label: 'Bottom Left' },
    { position: toast.POSITION.BOTTOM_CENTER, label: 'Bottom Center' },
    { position: toast.POSITION.BOTTOM_RIGHT, label: 'Bottom Right' },
];
function ToastifyPosition() {
    const notifyPosition = (position) => {
        toast(`Notification ${position}!`, { position });
    };
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: notificationPositions.map(({ position, label }, index) => (_jsx(Button, { onClick: () => notifyPosition(position), children: label }, index))) }), _jsx(ToastContainer, {})] }));
}
export default ToastifyPosition;
