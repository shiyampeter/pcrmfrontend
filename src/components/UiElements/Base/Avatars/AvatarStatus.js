import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarImgData } from './data/avatarData';
const AvatarStatus = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: avatarImgData.map(({ src, alt, status }, index) => (_jsx(Avatar, { type: "image", size: "md", src: src, alt: alt, children: _jsx("div", { className: `avatar-status ${status}` }) }, index))) }) }));
};
export default AvatarStatus;
