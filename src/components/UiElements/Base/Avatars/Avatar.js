import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Avatar = ({ type, className, status, size, colorSolid, colorSoft, shape, ...props }) => {
    const avatarClassName = `avatar ${className || ''} ${size ? `avatar-${size}` : ''} ${colorSolid ? `text-white bg-${colorSolid}` : ''} ${colorSoft ? `text-${colorSoft} bg-${colorSoft}-subtle` : ''} ${shape ? `rounded-${shape}` : ''}`;
    if (type === 'text') {
        const { text } = props;
        const initials = text
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
        return (_jsxs("div", { className: avatarClassName, children: [status, _jsx("div", { children: initials })] }));
    }
    else if (type === 'image') {
        const { src, alt, children: imageChildren } = props;
        return (_jsxs("div", { className: avatarClassName, children: [status, _jsx("img", { src: src, alt: alt || 'Avatar', className: `img-fluid rounded-${shape}` }), imageChildren] }));
    }
    else {
        return null;
    }
};
export default Avatar;
