import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { LoadingButton } from '@mui/lab';
const Transition = React.forwardRef(function Transition(props, ref) {
    return _jsx(Slide, { direction: "up", ref: ref, ...props });
});
function DeleteModal({ open, close, title, content, submit, loading }) {
    const handleDelete = async () => {
        await submit();
        await close();
    };
    return (_jsxs(Dialog, { open: open, TransitionComponent: Transition, keepMounted: true, onClose: close, "aria-describedby": "alert-dialog-slide-description", children: [_jsx(DialogTitle, { children: title }), _jsx(DialogContent, { children: _jsx(DialogContentText, { id: "alert-dialog-slide-description", children: content }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: close, style: { color: 'white' }, children: "Cancel" }), _jsx(LoadingButton, { loadingPosition: "center", loading: loading, variant: "contained", type: "submit", onClick: handleDelete, className: "submitBtnn", children: "Delete" })] })] }));
}
export default DeleteModal;
