import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { MegaMenuHome, } from '@/components/Topbar/MegaMenu';
import { useState } from 'react';
const MegaMenu = () => {
    const [homeOpen, setHomeOpen] = useState(false);
    const [appsOpen, setAppsOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    function megaMenuClose() {
        document.body.classList.remove('megamenu-open');
        const backdrop = document.getElementById('megaMenuBackdrop');
        if (backdrop) {
            document.body.removeChild(backdrop);
        }
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "megamenu", children: [_jsxs("div", { className: "w-100 d-flex d-lg-none align-items-center gap-4 ps-4 pe-3 py-3 border-bottom", style: { height: '4.5rem' }, children: [_jsx("h5", { className: "mb-0", children: "Navigation" }), _jsx("div", { className: "ms-auto btn btn-light btn-icon btn-md", onClick: megaMenuClose, children: _jsx("i", { className: "fi fi-rr-cross" }) })] }), _jsx(MegaMenuHome, { isOpen: homeOpen, setIsOpen: setHomeOpen })] }) }));
};
export default MegaMenu;
