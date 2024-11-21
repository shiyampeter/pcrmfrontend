import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Avatar from './Avatar';
import { avatarTextData } from './data/avatarData';
const AvatarSoft = () => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: avatarTextData.map(({ text, colorSoft }, index) => (_jsx(Avatar, { type: "text", size: "md", text: text, colorSoft: colorSoft }, index))) }) }));
};
export default AvatarSoft;
