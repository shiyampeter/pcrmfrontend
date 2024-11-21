import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
import { Toaster, toast } from 'react-hot-toast';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import Followers from './data/followerData';
const FollowersComponent = () => {
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
    return (_jsxs(_Fragment, { children: [_jsxs(Row, { className: "g-3 g-md-4", children: [followerData.map(({ image, name, email, isFollowing }, idx) => (_jsx(Col, { sm: 6, lg: 4, xxl: 3, children: _jsx(Card, { children: _jsxs(Card.Body, { className: "text-center py-8", children: [_jsx("div", { className: "mb-4", children: _jsx(Avatar, { type: "image", src: image, alt: "User Avatar", className: "avatar avatar-xxl" }) }), _jsxs("div", { children: [_jsx("h6", { className: "fw-semibold mb-1", children: name }), _jsx("p", { className: "fs-13 fw-light text-muted mb-3", children: email }), _jsx(Button, { variant: "soft-light", className: `rounded-pill ${isFollowing ? 'bg-success-subtle text-success' : ''}`, onClick: () => toggleIsFollow(idx), children: isFollowing ? 'Following' : 'Follow' })] })] }) }) }, idx))), _jsx(Col, { sm: 12, className: "text-center", children: _jsx(Loading, {}) })] }), _jsx(Toaster, { position: "top-center" })] }));
};
export default FollowersComponent;
