import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarImgData } from './data/avatarData';
const AvatarSizing = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 3, className: "flex-wrap", children: avatarImgData.map(({ src, alt, size }, index) => (_jsx(Avatar, { type: "image", size: size, src: src, alt: alt }, index))) }) }));
};
export default AvatarSizing;
