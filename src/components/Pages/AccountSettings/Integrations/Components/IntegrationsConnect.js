import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Card, Col, FormCheck, Image, Modal, Row, Spinner, Stack } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import connectedData from './data/connectedData';
const IntegrationsConnect = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedIntegration, setSelectedIntegration] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [syncStates, setSyncStates] = useState(connectedData.reduce((acc, integration) => {
        acc[integration.name] = integration.isSync;
        return acc;
    }, {}));
    const handleToggleSwitch = (name) => {
        setSyncStates((prevSyncStates) => ({
            ...prevSyncStates,
            [name]: !prevSyncStates[name],
        }));
        const toastMessage = syncStates[name] ? `${name} Sync is OFF` : `${name} Sync is ON`;
        toast.success(toastMessage);
    };
    const handleViewIntegration = (integration) => {
        setSelectedIntegration(integration);
        setShowModal(true);
    };
    const handleUninstallModal = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setShowModal(false);
            toast.success('Uninstall successfully');
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "d-md-flex align-items-center justify-content-between gap-4 mb-6", children: [_jsxs("div", { children: [_jsx("h5", { className: "fw-semibold", children: "Connected" }), _jsx("p", { className: "mb-0", children: "Display content from your connected accounts on your site" })] }), _jsxs(Link, { to: "#!", className: "icon-link icon-link-hover link-primary mt-3 mt-md-0", children: [_jsx("span", { children: "All Connected" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] })] }), _jsx(Row, { className: "g-3 g-md-4", children: connectedData.map((item, idx) => (_jsx(Col, { md: 6, xl: 4, children: _jsxs(Card, { children: [_jsxs(Card.Body, { children: [_jsxs(Stack, { direction: "horizontal", className: "mb-4", children: [_jsxs(Stack, { gap: 3, direction: "horizontal", children: [_jsx("div", { className: "p-2 border rounded bg-secondary-subtle", style: { width: '3rem', height: '3rem' }, children: _jsx(Image, { src: item.image, alt: "", className: "img-fluid" }) }), _jsxs("div", { children: [_jsx("h6", { className: "fs-14 fw-semibold", children: item.name }), _jsxs("p", { className: "mb-0 text-truncate", children: [item.count, " Installed"] })] })] }), _jsx("div", { className: "ms-auto", children: _jsx(FormCheck, { type: "switch", id: `syncSwitch-${idx}`, checked: syncStates[item.name], onChange: () => handleToggleSwitch(item.name) }) })] }), _jsx("p", { className: "mb-0", children: item.desc })] }), _jsx(Card.Footer, { className: "px-4 py-3 border-top", children: _jsxs(Button, { variant: "neutral", onClick: () => handleViewIntegration(item), children: ["View Integration", ' ', _jsx("i", { className: "fi fi-rr-arrow-up-right-from-square fs-14 ms-2" })] }) })] }) }, idx))) }), _jsxs(Modal, { centered: true, show: showModal, onHide: () => setShowModal(false), children: [_jsx(Modal.Body, { children: selectedIntegration && (_jsxs(_Fragment, { children: [_jsxs(Stack, { direction: "horizontal", className: "mb-4", children: [_jsxs(Stack, { gap: 3, direction: "horizontal", children: [_jsx("div", { className: "p-2 border rounded bg-secondary-subtle", style: { width: '3rem', height: '3rem' }, children: _jsx(Image, { src: selectedIntegration.image, alt: "", className: "img-fluid" }) }), _jsxs("div", { children: [_jsx("h6", { className: "fs-14 fw-semibold", children: selectedIntegration.name }), _jsxs("p", { className: "mb-0", children: [selectedIntegration.count, " Installed"] })] })] }), _jsx("div", { className: "ms-auto", children: _jsx("span", { className: `fs-12 px-2 ms-2 border rounded-pill hstack ${selectedIntegration.status === 'Verified'
                                                    ? 'border-success text-success'
                                                    : 'border-danger text-danger'}`, children: selectedIntegration.status }) })] }), _jsxs("p", { children: [_jsx("span", { className: "fw-semibold text-dark", children: "Description: " }), ' ', selectedIntegration.fulldesc] })] })) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", onClick: () => setShowModal(false), className: "text-danger", children: "Close" }), _jsx(Button, { variant: "danger", className: "text-white", onClick: handleUninstallModal, disabled: isSaving, children: isSaving ? (_jsxs(_Fragment, { children: [_jsx(Spinner, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }), _jsx("span", { className: "ms-2", children: 'Uninstalling...' })] })) : ('Uninstall') })] })] }), _jsx(Toaster, { position: "top-center" })] }));
};
export default IntegrationsConnect;
