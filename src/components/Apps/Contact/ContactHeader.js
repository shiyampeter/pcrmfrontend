import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
const ContactHeader = ({ selectedCategory, labels, categories, sidebarMiniToggle, setSidebarMiniToggle }) => {
    const handleSidebarMiniToggle = () => {
        document.querySelector('.apps-card')?.classList.add('apps-sidebar-mini-toggle');
        setSidebarMiniToggle(true);
        if (sidebarMiniToggle) {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-mini-toggle');
            setSidebarMiniToggle(false);
        }
    };
    return (_jsxs(Stack, { direction: "horizontal", gap: 2, className: "px-3 border-bottom", style: { minHeight: '4.5rem' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx(Button, { variant: "light", className: "btn-icon btn-md", onClick: handleSidebarMiniToggle, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) }), _jsx("h5", { className: "fs-16 fw-bold mb-0", children: labels.find((label) => label.value === selectedCategory)?.name ??
                            categories.find((category) => category.value === selectedCategory)?.name })] }), _jsx(Button, { variant: "light", className: "btn-icon btn-md ms-auto", children: _jsx("i", { className: "fi fi-br-menu-dots-vertical" }) })] }));
};
export default ContactHeader;
