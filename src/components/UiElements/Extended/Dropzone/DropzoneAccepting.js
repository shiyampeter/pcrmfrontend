import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';
import Avatar from '../../Base/Avatars/Avatar';
const DropzoneAccepting = () => {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
        },
        onDrop: (acceptedFiles) => {
            const previews = acceptedFiles.map((file) => URL.createObjectURL(file));
            setImagePreviews(previews);
            setAcceptedFiles(acceptedFiles);
        },
    });
    const formatBytesToMB = (bytes) => {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    };
    const handleRemoveFile = (fileIndex) => {
        const updatedPreviews = [...imagePreviews];
        updatedPreviews.splice(fileIndex, 1);
        setImagePreviews(updatedPreviews);
        const removedFile = acceptedFiles[fileIndex];
        const updatedFiles = acceptedFiles.filter((_, index) => index !== fileIndex);
        setAcceptedFiles(updatedFiles);
        toast.success(`File "${removedFile.name}" has been deleted`);
    };
    const files = acceptedFiles.map((file, index) => (_jsxs(Stack, { direction: "horizontal", gap: 3, className: "py-2 px-3 mb-2 border rounded", children: [imagePreviews[index] && (_jsx(Avatar, { type: "image", size: "md", src: imagePreviews[index], alt: "Preview" })), _jsxs("div", { children: [_jsx("h6", { className: "mb-1", children: file.path }), _jsx("span", { className: "fs-13 text-muted", children: formatBytesToMB(file.size) })] }), _jsx("div", { className: "ms-auto", children: _jsx(Button, { type: "button", variant: "soft-light", className: "btn-icon", onClick: () => handleRemoveFile(index), children: _jsx("i", { className: "fi fi-rr-trash text-danger" }) }) })] }, file.path)));
    return (_jsxs("section", { children: [_jsxs("div", { ...getRootProps({ className: 'dropzone' }), children: [_jsx("input", { ...getInputProps() }), _jsxs("div", { className: "dropzone-content", children: [_jsx(Button, { variant: "neutral", className: "btn-xxl btn-icon mb-4", children: _jsx("i", { className: "fi fi-rr-upload fs-20" }) }), _jsx("h5", { children: "Drop files here or click to upload." }), _jsx("p", { className: "fs-13 text-muted mb-0", children: "Allowed *.jpeg, *.jpg, *.png, *.gif" })] })] }), _jsx("aside", { className: "mt-4", children: files })] }));
};
export default DropzoneAccepting;
