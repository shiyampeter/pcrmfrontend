import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const SweetAlert2Positioned = () => {
    const showSwalTopStart = () => {
        withReactContent(Swal).fire({
            position: 'top-start',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500,
        });
    };
    const showSwalTopEnd = () => {
        withReactContent(Swal).fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500,
        });
    };
    const showSwalBottomStart = () => {
        withReactContent(Swal).fire({
            position: 'bottom-start',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500,
        });
    };
    const showSwalBottomEnd = () => {
        withReactContent(Swal).fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500,
        });
    };
    const positions = [
        { label: 'TopStart', onClick: showSwalTopStart },
        { label: 'TopEnd', onClick: showSwalTopEnd },
        { label: 'BottomStart', onClick: showSwalBottomStart },
        { label: 'BottomEnd', onClick: showSwalBottomEnd },
    ];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: positions.map(({ label, onClick }, index) => (_jsx(Button, { variant: "primary", onClick: onClick, children: label }, index))) }) }));
};
export default SweetAlert2Positioned;
