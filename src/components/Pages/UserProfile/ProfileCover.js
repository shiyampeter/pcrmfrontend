import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from 'react-bootstrap';
import profileBanner from '@/assets/images/general/banner.png';
import profileImg from '@/assets/images/avatars/1.png';
import ProfileNav from './ProfileNav';
const Cover = () => {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs(Card, { className: "mb-3 mb-md-4", children: [_jsx(Card.Img, { variant: "top", src: profileBanner, alt: "profile banner" }), _jsx(Card.Body, { children: _jsxs("div", { className: "w-100 d-flex gap-3 mt-n18 mt-sm-n20 mt-md-n24", children: [_jsx(Image, { src: profileImg, alt: "profile image", thumbnail: true, rounded: true, className: "profile-avatar" }), _jsxs("div", { className: "w-100 d-flex align-items-end gap-4", children: [_jsxs("div", { children: [_jsxs("h5", { className: "fs-16 fw-sembold", children: [_jsx("span", { children: "Alexndra Della" }), _jsx("i", { className: "fi fi-rr-badge-check fs-12 text-success ms-2" })] }), _jsx("span", { children: "California, United States" })] }), _jsxs("div", { className: "d-none d-md-flex align-items-end justify-content-center justify-content-md-end gap-1 mb-md-2 ms-md-auto", children: [_jsx(Button, { className: "btn btn-md btn-primary", onClick: () => {
                                                    navigate('/account-settings/account');
                                                }, children: "Edit Profile" }), _jsx(Link, { to: "#!", className: "btn btn-md btn-success", children: "Message" })] })] })] }) }), _jsx(ProfileNav, {})] }) }));
};
export default Cover;
