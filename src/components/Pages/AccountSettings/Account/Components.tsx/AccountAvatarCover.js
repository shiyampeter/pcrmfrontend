import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const AccountAvatarCover = () => {
    const [avatarFile, setAvatarFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    const avatarImageRef = React.useRef(null);
    const avatarImageUploader = React.useRef(null);
    const coverImageRef = React.useRef(null);
    const coverImageUploader = React.useRef(null);
    const handleImageUpload = (e, setImageFile, imageRef, imageUploader) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                const currentImage = imageRef.current;
                if (currentImage) {
                    currentImage.src = event.target?.result;
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const handleReset = (setImageFile, imageRef, imageUploader) => {
        setImageFile(null);
        const defaultImageSrc = 'https://via.placeholder.com/150'; // Placeholder image URL
        const currentImage = imageRef.current;
        if (currentImage) {
            currentImage.src = defaultImageSrc;
        }
        if (imageUploader.current) {
            imageUploader.current.value = '';
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-6 mb-md-16", children: [_jsx("h5", { className: "fw-semibold", children: "Avatar & Cover " }), _jsx("p", { children: "Change avatar and cover images in your account" })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Avatar" }) }), _jsxs(Col, { md: 9, xl: 8, xxl: 6, children: [_jsx("input", { type: "file", accept: "image/*", onChange: (e) => handleImageUpload(e, setAvatarFile, avatarImageRef, avatarImageUploader), ref: (input) => (avatarImageUploader.current = input), style: {
                                    display: 'none',
                                } }), _jsx("div", { style: {
                                    height: '6rem',
                                    width: '6rem',
                                    cursor: 'pointer',
                                }, className: "d-flex align-items-center justify-content-center fs-24 border border-3 rounded overflow-hidden bg-secondary-subtle", onClick: () => avatarImageUploader.current?.click(), children: avatarFile ? (_jsx("img", { src: URL.createObjectURL(avatarFile), ref: avatarImageRef, className: "rounded", style: {
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                    } })) : (_jsx(FiPlus, {})) }), _jsxs("p", { className: "text-muted mt-2", children: ["Click to change avatar image", ' - ', _jsx(Link, { to: "#!", className: "text-danger", onClick: () => handleReset(setAvatarFile, avatarImageRef, avatarImageUploader), children: "Reset" })] })] })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Cover" }) }), _jsxs(Col, { md: 9, xl: 8, xxl: 6, children: [_jsx("input", { type: "file", accept: "image/*", onChange: (e) => handleImageUpload(e, setCoverFile, coverImageRef, coverImageUploader), ref: (input) => (coverImageUploader.current = input), style: {
                                    display: 'none',
                                } }), _jsx("div", { style: {
                                    height: '12rem',
                                    width: '100%',
                                    cursor: 'pointer',
                                }, className: "d-flex align-items-center justify-content-center fs-24 border border-3 rounded overflow-hidden bg-secondary-subtle", onClick: () => coverImageUploader.current?.click(), children: coverFile ? (_jsx("img", { src: URL.createObjectURL(coverFile), ref: coverImageRef, className: "rounded", style: {
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                    } })) : (_jsx(FiPlus, {})) }), _jsxs("p", { className: "text-muted mt-2", children: ["Click to change cover image", ' - ', _jsx(Link, { to: "#!", className: "text-danger", onClick: () => handleReset(setCoverFile, coverImageRef, coverImageUploader), children: "Reset" })] })] })] })] }));
};
export default AccountAvatarCover;
