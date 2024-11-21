import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import Followers from './data/ConnectionData';
const OverviewConnection = () => {
    const [followerData, setFollowerData] = useState(Followers);
    const toggleIsFollow = (idx) => {
        setFollowerData((prevData) => {
            const newData = [...prevData];
            newData[idx].isFollowing = !newData[idx].isFollowing;
            return newData;
        });
        if (followerData[idx].isFollowing) {
            toast.success(`Following ${followerData[idx].name}!`);
        }
        else {
            toast.error(`Unfollowed ${followerData[idx].name}!`);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("h5", { className: "fw-semibold mb-4", children: "Connections" }), followerData.map(({ image, name, connection, isFollowing }, idx) => (_jsxs(Stack, { direction: "horizontal", gap: 3, className: "w-100 mb-4", children: [_jsxs(Stack, { direction: "horizontal", gap: 3, children: [_jsx(Avatar, { type: "image", src: image, alt: "User Avatar", className: "avatar avatar-md" }), _jsxs("div", { children: [_jsx(Link, { to: "#!", className: "fw-semibold d-block", children: name }), _jsx("small", { className: "text-muted", children: connection })] })] }), _jsx(Button, { variant: "soft-light", className: `rounded-pill ms-auto ${isFollowing ? 'bg-success-subtle text-success' : ''}`, onClick: () => toggleIsFollow(idx), children: isFollowing ? 'Following' : 'Follow' })] }, idx))), _jsxs(Link, { to: "#!", className: "icon-link icon-link-hover link-primary", children: [_jsx("span", { children: "All Connections" }), _jsx("i", { className: "fi fi-rr-arrow-small-right bi" })] }), _jsx(Toaster, { position: "top-center" })] }));
};
export default OverviewConnection;
