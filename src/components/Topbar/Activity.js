import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ActivityOffcanvas from './Activity/ActivityOffcanvas';
const Activity = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const openOffcanvas = () => {
        setShowOffcanvas(true);
    };
    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "header-btn", onClick: openOffcanvas, children: [_jsx("i", { className: "fi fi-rr-pulse" }), _jsx("div", { className: "rounded-circle bg-primary position-absolute translate-middle-y top-25", style: { width: '6px', height: '6px' } })] }), showOffcanvas && (_jsx(ActivityOffcanvas, { show: showOffcanvas, handleClose: handleCloseOffcanvas }))] }));
};
export default Activity;
