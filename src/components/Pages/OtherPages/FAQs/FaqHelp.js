import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';
const avatarImages = [avatar1, avatar2, avatar3];
const FaqHelp = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "text-center mx-auto", style: { maxWidth: '600px' }, children: [_jsx("div", { className: "avatar-group avatar-group-lg mb-4 justify-content-center", children: avatarImages.map((avatarSrc, index) => (_jsx(Avatar, { type: "image", src: avatarSrc, alt: `User Avatar ${index + 1}`, className: "avatar avatar-lg" }, index))) }), _jsx("h2", { className: "fw-bold text-dark mb-3", children: "Still Have A Question?" }), _jsx("p", { className: "lead", children: "There are several ways to say \"not yet\" and \"still have questions\" in an email response, depending on the context and tone of the message." }), _jsx(Link, { to: "/other-pages/contact-us", className: "btn btn-primary", children: "Get in touch" })] }) }));
};
export default FaqHelp;
