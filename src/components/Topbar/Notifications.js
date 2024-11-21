import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Badge, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PerfectScrollbar from 'react-perfect-scrollbar';
import BgCircleShapeStyle from '../Misc/BgCircleShape';
import NotificationOffcanvas from './Notifications/NotificationOffcanvas';
import { notifyData } from './data/notifyData';
import 'react-perfect-scrollbar/dist/css/styles.css';
const Notifications = () => {
    const notify = notifyData || [];
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    };
    const toggleSound = () => {
        setIsSoundOn(!isSoundOn);
        const message = isSoundOn ? 'Sound turned off' : 'Sound turned on';
        toast(message, {
            icon: isSoundOn ? '🔕' : '🔔',
        });
    };
    const openOffcanvas = () => {
        setShowOffcanvas(true);
        setDropDownOpen(false);
    };
    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Dropdown, { show: dropDownOpen, onToggle: toggleDropDown, children: [_jsxs(Dropdown.Toggle, { as: "a", className: "arrow-none header-btn", "data-bs-toggle": "dropdown", "data-bs-auto-close": "outside", role: "button", onClick: toggleDropDown, children: [_jsx("i", { className: "fi fi-rr-bell" }), _jsx(Badge, { bg: "primary", className: "rounded-circle position-absolute translate-middle-y top-30 start-40", children: "5" })] }), _jsxs(Dropdown.Menu, { align: "end", className: "dropdown-xl py-0 px-0 overflow-hidden", children: [_jsx("div", { className: "p-0 border-top-0 border-start-0 border-end-0 border-dashed border", onClick: toggleDropDown, children: _jsxs("div", { className: "bg-primary text-white px-4 py-4", style: BgCircleShapeStyle, children: [_jsxs("h5", { className: "fw-bold text-white mb-1", children: [_jsx("span", { children: "Notifications" }), _jsx("span", { className: "badge  bg-body text-dark ms-2 rounded-pill", children: "12+" })] }), _jsx("p", { className: "fs-13 mb-0", children: "You have 12+ unread notification" })] }) }), _jsx(PerfectScrollbar, { style: { maxHeight: 320 }, className: "list-group list-group-flush position-relative", children: notify.map(({ variant, icon, title, createdAt }, idx) => {
                                    return (_jsxs(Link, { to: "", onClick: openOffcanvas, className: "list-group-item fw-normal d-flex position-relative", children: [_jsx("div", { className: `avatar avatar-lg rounded flex-shrink-0 bg-${variant}-subtle`, children: _jsx("i", { className: `${icon} text-${variant}` }) }), _jsxs("div", { className: "ms-4", children: [_jsx("div", { className: "mb-1", dangerouslySetInnerHTML: { __html: title } }), _jsx("small", { className: "fs-11 fw-normal text-uppercase text-muted", children: createdAt })] })] }, idx));
                                }) }), _jsxs("div", { className: "px-4 py-3 border-top d-flex justify-content-between align-items-center", children: [_jsx(Link, { to: "#", onClick: toggleSound, className: "hstack gap-2", children: isSoundOn ? (_jsxs("span", { className: "hstack gap-2", children: [_jsx("i", { className: "fi fi-rr-volume" }), _jsx("span", { children: "Mute" })] })) : (_jsxs("span", { className: "hstack gap-2 text-danger", children: [_jsx("i", { className: "fi fi-rr-volume-slash" }), _jsx("span", { children: "Unmute" })] })) }), _jsxs(Link, { to: "", className: "icon-link icon-link-hover", onClick: openOffcanvas, children: [_jsx("span", { children: "View Alls" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] })] })] })] }), showOffcanvas && (_jsx(NotificationOffcanvas, { show: showOffcanvas, handleClose: handleCloseOffcanvas, toggleSound: toggleSound, isSoundOn: isSoundOn }))] }));
};
export default Notifications;
