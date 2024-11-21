import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarTextData } from './data/avatarData';
const AvatarGradient = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: avatarTextData.map(({ text, colorSolid }, index) => (_jsx(Avatar, { type: "text", size: "md", text: text, colorSolid: colorSolid, className: "bg-gradient" }, index))) }) }));
};
export default AvatarGradient;
