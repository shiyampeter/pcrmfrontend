import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Button, Stack } from 'react-bootstrap';
const SweetAlert2Type = () => {
    const alertTypes = [
        {
            variant: 'success',
            text: 'Success: Good job!',
            icon: 'success',
            customClass: 'btn btn-success',
        },
        {
            variant: 'info',
            text: 'Info: About information',
            icon: 'info',
            customClass: 'btn btn-info',
        },
        {
            variant: 'warning',
            text: 'Warning: Your attention',
            icon: 'warning',
            customClass: 'btn btn-warning',
        },
        {
            variant: 'danger',
            text: 'Error: Something error',
            icon: 'error',
            customClass: 'btn btn-danger',
        },
        {
            variant: 'secondary',
            text: "Question: What's the matter?",
            icon: 'question',
            customClass: 'btn btn-secondary',
        },
    ];
    const showAlert = (text, icon, customClass) => {
        withReactContent(Swal).fire({
            text,
            icon,
            buttonsStyling: false,
            confirmButtonText: 'Ok, got it!',
            customClass: {
                confirmButton: customClass,
            },
        });
    };
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: alertTypes.map(({ variant, text, icon, customClass }, index) => (_jsx(Button, { variant: variant, onClick: () => showAlert(text, icon, customClass), children: variant.charAt(0).toUpperCase() + variant.slice(1) }, index))) }) }));
};
export default SweetAlert2Type;
