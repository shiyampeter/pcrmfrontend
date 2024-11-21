import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';
import { colorOptions } from './data/colorOptions';
const KanbanColumnEditModal = ({ isOpen, onClose, handleSave, handleTitleChange, handleColorChange, editingColumn, selectedColor, columnName, onColumnNameChange, }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newColor, setNewColor] = useState(null);
    useEffect(() => {
        setNewTitle(editingColumn?.title || '');
        setNewColor(selectedColor || colorOptions[0]);
    }, [isOpen, editingColumn, selectedColor]);
    const handleCancel = () => {
        setNewTitle(editingColumn?.title || '');
        setNewColor(selectedColor);
        onClose();
    };
    const handleSaveChanges = () => {
        handleTitleChange(newTitle);
        handleColorChange(newColor);
        handleSave();
        onClose();
    };
    return (_jsx(_Fragment, { children: _jsxs(Modal, { show: isOpen, onHide: handleCancel, centered: true, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: `Edit ${columnName}` }) }), _jsxs(Modal.Body, { children: [_jsxs(Form.Group, { className: "mb-4", controlId: "editBoardTitle", children: [_jsx(Form.Label, { children: "Title" }), _jsx(Form.Control, { type: "text", placeholder: "Enter new title", value: newTitle, onChange: (e) => setNewTitle(e.target.value) })] }), _jsxs(Form.Group, { controlId: "editBoardColor", children: [_jsx(Form.Label, { children: "Color" }), _jsx(Select, { options: colorOptions, value: newColor, onChange: (selectedOption) => setNewColor(selectedOption), classNamePrefix: "select", className: "text-capitalize" })] })] }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", className: "text-danger", onClick: handleCancel, children: "Close" }), _jsx(Button, { variant: "primary", onClick: handleSaveChanges, children: "Save Changes" })] })] }) }));
};
export default KanbanColumnEditModal;
