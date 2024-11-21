import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Dropdown } from 'react-bootstrap';
import { profileDataGroup1, profileDataGroup2, profileDataGroup3 } from './data/profileData';
import NotificationOffcanvas from './Notifications/NotificationOffcanvas';
import profilePic from '@/assets/images/avatars/1.png';
import Avatar from './../UiElements/Base/Avatars/Avatar';
import Status from '../Misc/Status';
const Profile = () => {
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    };
    const [status, setStatus] = useState('Online');
    const statusOptions = [
        { label: 'Busy', color: 'warning' },
        { label: 'Online', color: 'success' },
        { label: 'Offline', color: 'secondary' },
        { label: 'Inactive', color: 'danger' },
        { label: 'Invisible', color: 'black' },
        { label: 'Always', color: 'info' },
    ];
    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
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
    return (_jsxs(_Fragment, { children: [_jsxs(Dropdown, { show: dropDownOpen, onToggle: toggleDropDown, children: [_jsx(Dropdown.Toggle, { className: "arrow-none header-btn px-2", as: "a", role: "button", onClick: toggleDropDown, children: _jsx(Avatar, { type: "image", src: profilePic, size: "md", children: _jsx("div", { className: `avatar-status bg-${statusOptions.find((opt) => opt.label === status)
                                    ?.color}` }) }) }), _jsxs(Dropdown.Menu, { align: "end", className: "dropdown-md px-0 py-0", children: [_jsxs("div", { className: "px-4 py-3 d-flex border-bottom", children: [_jsx(Avatar, { type: "image", src: profilePic, size: "md", shape: "2", className: "flex-shrink-0" }), _jsxs("div", { className: "flex-grow-1 ms-3", children: [_jsx("h6", { className: "text-dark mb-0", children: "Alexandra Della" }), _jsx(Status, { status: status, changeStatus: handleStatusChange })] })] }), _jsxs("div", { className: "px-2 pt-2", children: [profileDataGroup1.map(({ redirectTo, icon, label }, idx) => (_jsxs(Link, { to: redirectTo, className: "dropdown-item", children: [_jsx("i", { className: icon }), _jsx("span", { className: "ms-3", children: label })] }, idx))), _jsxs(Link, { to: "", className: "dropdown-item", onClick: openOffcanvas, children: [_jsx("i", { className: "fi fi-rr-bell" }), _jsx("span", { className: "ms-3", children: "Notification" })] })] }), _jsx("div", { className: "dropdown-divider" }), _jsx("div", { className: "px-2 py-2", children: profileDataGroup2.map(({ redirectTo, icon, label }, idx) => (_jsxs(Link, { to: redirectTo, className: "dropdown-item", children: [_jsx("i", { className: icon }), _jsx("span", { className: "ms-3", children: label })] }, idx))) }), _jsx("div", { className: "dropdown-divider" }), _jsx("div", { className: "px-2 pb-2", children: profileDataGroup3.map(({ redirectTo, icon, label }, idx) => (_jsxs(Link, { to: redirectTo, className: "dropdown-item text-danger", children: [_jsx("i", { className: icon }), _jsx("span", { className: "ms-3", children: label })] }, idx))) })] })] }), showOffcanvas && (_jsx(NotificationOffcanvas, { show: showOffcanvas, handleClose: handleCloseOffcanvas, toggleSound: toggleSound, isSoundOn: isSoundOn }))] }));
};
export default Profile;
