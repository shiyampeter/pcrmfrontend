import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
const CustomToast = () => {
    return (_jsxs("div", { className: "ms-3", children: [_jsx("h6", { children: "Update Successfully" }), _jsx("p", { className: "fs-12 text-muted mb-0", children: "Success!!! Your profile has been successfully updated." })] }));
};
function ToastifyCustom() {
    const messageToast = () => {
        toast.success(_jsx(CustomToast, {}), {
            position: 'top-right',
            pauseOnHover: true,
            closeOnClick: true,
            draggable: true,
        });
    };
    const noIcon = () => {
        toast.success(_jsx(CustomToast, {}), {
            position: 'top-right',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: false,
        });
    };
    const darkVersion = () => {
        toast.dark('This note is for the dark version toast', {
            position: 'top-right',
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", gap: 1, children: [_jsx(Button, { variant: "success", onClick: () => messageToast(), children: "Message With Title" }), _jsx(Button, { variant: "primary", onClick: () => noIcon(), children: "No Icon Version" }), _jsx(Button, { variant: "dark", onClick: () => darkVersion(), children: "Dark Version" })] }) }));
}
export default ToastifyCustom;
