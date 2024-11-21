import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarTextData } from './data/avatarData';
const AvatarShape = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: avatarTextData.map(({ text, shape }, index) => (_jsx(Avatar, { type: "text", size: "md", text: text, shape: shape, colorSolid: "primary" }, index))) }) }));
};
export default AvatarShape;
