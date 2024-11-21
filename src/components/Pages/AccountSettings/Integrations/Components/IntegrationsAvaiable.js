import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Card, Col, Image, Modal, Row, Spinner, Stack } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import avaiableData from './data/avaiableData';
const IntegrationsAvaiable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedIntegration, setSelectedIntegration] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const handleInstallNow = (integration) => {
        setSelectedIntegration(integration);
        setShowModal(true);
    };
    const handleInstallModal = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowModal(false);
            toast.success('Install successfully!');
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "d-md-flex align-items-center justify-content-between gap-4 mb-6", children: [_jsxs("div", { children: [_jsx("h5", { className: "fw-semibold", children: "Available" }), _jsx("p", { className: "mb-0", children: "Display content from your connected accounts on your site" })] }), _jsxs(Link, { to: "#!", className: "icon-link icon-link-hover link-primary mt-3 mt-md-0", children: [_jsx("span", { children: "All Available" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] })] }), _jsx(Row, { className: "g-3 g-md-4", children: avaiableData.map((item, idx) => (_jsx(Col, { md: 6, xl: 4, children: _jsxs(Card, { children: [_jsxs(Card.Body, { children: [_jsxs(Stack, { gap: 3, direction: "horizontal", className: "mb-4", children: [_jsxs(Stack, { gap: 3, direction: "horizontal", children: [_jsx("div", { className: "p-2 border rounded bg-secondary-subtle", style: { width: '3rem', height: '3rem' }, children: _jsx(Image, { src: item.image, alt: "", className: "img-fluid" }) }), _jsxs("div", { children: [_jsx("h6", { className: "fs-14 fw-semibold", children: item.name }), _jsxs("p", { className: "mb-0 text-truncate", children: [item.count, " Installed"] })] })] }), _jsx("div", { className: "ms-auto", children: _jsx("span", { className: `fs-12 px-2 ms-2 border rounded-pill hstack ${item.status === 'Verified'
                                                        ? 'border-success text-success'
                                                        : 'border-danger text-danger'}`, children: item.status }) })] }), _jsx("p", { className: "mb-0", children: item.desc })] }), _jsx(Card.Footer, { className: "px-4 py-3 border-top", children: _jsxs(Button, { variant: "neutral", onClick: () => handleInstallNow(item), children: [_jsx("i", { className: "fi fi-rr-plus fs-12 me-2" }), _jsx("span", { children: "Install Now" })] }) })] }) }, idx))) }), _jsxs(Modal, { show: showModal, onHide: () => setShowModal(false), centered: true, children: [_jsxs(Modal.Body, { children: [_jsxs(Stack, { gap: 3, direction: "horizontal", className: "mb-6", children: [_jsx("div", { className: "p-2 border rounded bg-secondary-subtle", style: { width: '3rem', height: '3rem' }, children: _jsx(Image, { src: selectedIntegration?.image, alt: "", className: "img-fluid" }) }), _jsxs("div", { children: [_jsx("h6", { className: "fs-14 fw-semibold", children: selectedIntegration?.name }), _jsxs("p", { className: "mb-0", children: [selectedIntegration?.count, " Installed"] })] })] }), _jsx("p", { className: "mb-0", children: selectedIntegration?.fulldesc })] }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", onClick: () => setShowModal(false), className: "text-danger", children: "Close" }), _jsx(Button, { variant: "success", className: "text-white", onClick: handleInstallModal, disabled: isSaving, children: isSaving ? (_jsxs(_Fragment, { children: [_jsx(Spinner, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }), _jsx("span", { className: "ms-2", children: 'Installing...' })] })) : ('Install Now') })] })] })] }));
};
export default IntegrationsAvaiable;
