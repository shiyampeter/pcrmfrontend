import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarImgData, avatarTextData } from './data/avatarData';
const AvatarGroup = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "avatar-group avatar-group-md", children: avatarImgData.map(({ src, alt }, index) => (_jsx(Avatar, { type: "image", size: "md", src: src, alt: alt }, index))) }), _jsx("hr", {}), _jsx(Stack, { direction: "horizontal", gap: 1, className: "avatar-group avatar-group-md", children: avatarTextData.map(({ text, colorSolid }, index) => (_jsx(Avatar, { type: "text", text: text, size: "md", colorSolid: colorSolid }, index))) })] }));
};
export default AvatarGroup;
