import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Stack, Spinner, Button } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
const Saving = ({ message }) => {
    const [isSaving, setIsSaving] = useState(false);
    const handleSaveChanges = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            toast.success(message || 'Saved successfully');
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { direction: "horizontal", gap: 1, children: [_jsx(Button, { variant: "primary", className: "text-white", onClick: handleSaveChanges, disabled: isSaving, children: isSaving ? (_jsxs(_Fragment, { children: [_jsx(Spinner, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }), _jsx("span", { className: "ms-2", children: ' Saving...' })] })) : ('Save Changes') }), _jsx(Button, { variant: "", className: "btn-soft-danger", children: "Reset" })] }), _jsx(Toaster, { position: "top-center" })] }));
};
export default Saving;
