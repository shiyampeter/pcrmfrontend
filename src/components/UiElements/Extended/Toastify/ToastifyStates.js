import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastConfigs = [
    {
        label: 'Success',
        variant: 'success',
        onClick: () => {
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_CENTER,
            });
        },
    },
    {
        label: 'Error',
        variant: 'danger',
        onClick: () => {
            toast.error('Error Notification !', {
                position: toast.POSITION.TOP_LEFT,
            });
        },
    },
    {
        label: 'Warning',
        variant: 'warning',
        onClick: () => {
            toast.warn('Warning Notification !', {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        },
    },
    {
        label: 'Info',
        variant: 'info',
        onClick: () => {
            toast.info('Info Notification !', {
                position: toast.POSITION.BOTTOM_CENTER,
            });
        },
    },
    {
        label: 'Custom',
        variant: 'primary',
        onClick: () => {
            toast('Custom Style Notification with css class!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar',
            });
        },
    },
];
function ToastifyStates() {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: toastConfigs.map((config, index) => (_jsx(Button, { variant: config.variant, onClick: config.onClick, children: config.label }, index))) }), _jsx(ToastContainer, {})] }));
}
export default ToastifyStates;
