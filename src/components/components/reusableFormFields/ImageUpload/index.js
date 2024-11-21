import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Avatar, Box, Button, FormHelperText, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useController } from 'react-hook-form';
function ImageUploadComponent(props) {
    const { label, Controller, control, name, setValue, error } = props;
    const { field } = useController({ name: name, control: control });
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            field.onChange(file);
        }
    };
    const imageUrl = import.meta.env.REACT_APP_IMG_URL;
    // const handleDeleteImage = () => {
    //     setValue(name, '')
    // };
    return (_jsx(_Fragment, { children: _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontSize: '13px' }, children: label }), _jsxs(Stack, { direction: 'horizontal', gap: 2, error: error, children: [_jsx(Box, { children: _jsxs(Button, { variant: "", component: "label", endIcon: field.value ? _jsx(EditIcon, {}) : _jsx(AddIcon, {}), sx: { backgroundColor: 'white', color: '#B2BEB5' }, children: [_jsxs(Typography, { variant: "", children: [" ", field.value ? 'Edit Image' : 'Add Image'] }), _jsx("input", { hidden: true, type: "file", accept: "image/*", onChange: handleImageUpload })] }) }), field.value && (_jsx(Avatar, { src: typeof field.value === 'string'
                                ? imageUrl + field.value
                                : URL?.createObjectURL(field?.value) })), field.value && (_jsx(IconButton, { onClick: () => field.onChange(''), children: _jsx(DeleteIcon, { className: "delete-icons" }) }))] }), _jsx(FormHelperText, { children: error })] }) }));
}
export default ImageUploadComponent;
