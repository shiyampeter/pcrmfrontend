import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarImgData } from './data/avatarData';
const AvatarDefault = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: avatarImgData.map(({ src, alt }, index) => (_jsx(Avatar, { type: "image", size: "md", src: src, alt: alt }, index))) }) }));
};
export default AvatarDefault;
