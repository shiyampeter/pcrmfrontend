import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const AcDelete = () => {
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    const handleDeleteAccount = () => {
        if (password === '' || !isChecked) {
            Swal.fire('Error', 'Please enter your password and confirm the action.', 'error');
            return;
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#25b865',
            cancelButtonColor: '#d13b4c',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
            }
        });
    };
    const handleDeactivateAccount = () => {
        if (password === '' || !isChecked) {
            Swal.fire('Error', 'Please enter your password and confirm the action.', 'error');
            return;
        }
        Swal.fire({
            title: 'Are you sure?',
            text: 'Your account will be deactivated!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#25b865',
            cancelButtonColor: '#d13b4c',
            confirmButtonText: 'Yes, deactivate it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deactivated!', 'Your account has been deactivated.', 'success');
            }
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx("h5", { className: "fw-semibold", children: "Delete Account" }), _jsx("p", { children: "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to." }), _jsx(Alert, { variant: "danger", className: "text-danger border border-danger border-opacity-10 mb-4 fs-12 fst-italic", children: "Go to the Data & Privacy section of your profile Account. Scroll to \"Your data & privacy options.\" Delete your Profile Account. Follow the instructions to delete your account:" }), _jsxs(Form, { children: [_jsx(Form.Group, { controlId: "formPassword", children: _jsx(Form.Control, { type: "password", placeholder: "Enter your password", value: password, onChange: handlePasswordChange }) }), _jsx(Form.Group, { controlId: "formCheckbox", className: "mt-3", children: _jsx(Form.Check, { type: "checkbox", label: "I confirm my account deletions or deactivation.", checked: isChecked, onChange: handleCheckboxChange }) }), _jsxs("div", { className: "d-grid d-sm-flex gap-1 mt-4", children: [_jsx(Button, { variant: "danger", type: "button", onClick: handleDeleteAccount, disabled: !password || !isChecked, children: "Delete Account" }), _jsx(Button, { variant: "warning", type: "button", onClick: handleDeactivateAccount, disabled: !password || !isChecked, children: "Deactivate Account" })] })] })] }));
};
export default AcDelete;
