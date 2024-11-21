import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ThemeSettings, useThemeContext } from '@/common';
import { Notifications, Profile, useThemeCustomizer, } from '@/components';
import Logo from '@/components/Common/Logo';
import { useViewport } from '@/hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
const Header = ({ toggleMenu, navOpen }) => {
    const { width } = useViewport();
    const { sidenavType } = useThemeCustomizer();
    const { updateSidebar } = useThemeContext();
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    function handleMegaMenuClick() {
        setMegaMenuOpen(!megaMenuOpen);
        if (!megaMenuOpen) {
            document.body.classList.add('megamenu-open');
            showBackdrop();
        }
        else {
            document.body.classList.remove('megamenu-open');
            hideBackdrop();
        }
    }
    function showBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.id = 'megaMenuBackdrop';
        backdrop.className = 'offcanvas-backdrop fade show z-1030';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', handleBackdropClick);
    }
    function hideBackdrop() {
        const backdrop = document.getElementById('megaMenuBackdrop');
        if (backdrop) {
            backdrop.removeEventListener('click', handleBackdropClick);
            document.body.removeChild(backdrop);
        }
    }
    function handleBackdropClick() {
        setMegaMenuOpen(false);
        document.body.classList.remove('megamenu-open');
        hideBackdrop();
    }
    const handleLeftMenuCallBack = () => {
        if (width < 768) {
            if (sidenavType === 'full') {
                showLeftSideBarBackdrop();
                document.getElementsByTagName('html')[0].classList.add('sidebar-enable');
            }
            else {
                updateSidebar({ size: ThemeSettings.sidebar.size.full });
            }
        }
        else if (sidenavType === 'iconbar') {
            updateSidebar({ size: ThemeSettings.sidebar.size.default });
        }
        else if (sidenavType === 'full') {
            showLeftSideBarBackdrop();
            document.getElementsByTagName('html')[0].classList.add('sidebar-enable');
        }
        else if (sidenavType === 'fullscreen') {
            updateSidebar({ size: ThemeSettings.sidebar.size.default });
            document.getElementsByTagName('html')[0].classList.add('sidebar-enable');
        }
        else {
            updateSidebar({ size: ThemeSettings.sidebar.size.iconbar });
        }
    };
    function showLeftSideBarBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.id = 'custom-backdrop';
        backdrop.className = 'offcanvas-backdrop fade show';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', function () {
            document.getElementsByTagName('html')[0].classList.remove('sidebar-enable');
            hideLeftSideBarBackdrop();
        });
    }
    function hideLeftSideBarBackdrop() {
        const backdrop = document.getElementById('custom-backdrop');
        if (backdrop) {
            document.body.removeChild(backdrop);
            document.body.style.removeProperty('overflow');
        }
    }
    return (_jsx(_Fragment, { children: _jsx("header", { className: "header-navbar", children: _jsxs("div", { className: "header-inner px-2 px-md-3", children: [_jsxs("div", { className: "header-left d-flex align-items-center", children: [_jsx(Link, { to: "/", children: _jsx(Logo, {}) }), _jsx("div", { className: "button-toggle-menu", children: _jsx("button", { className: "header-btn", onClick: handleLeftMenuCallBack, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) }) }), _jsx("button", { className: `navbar-toggle ${navOpen ? 'open' : ''}`, "data-bs-toggle": "collapse", "data-bs-target": "#topnav-menu-content", onClick: toggleMenu, children: _jsxs("div", { className: "lines", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }) }), _jsx(MegaMenu, {})] }), _jsxs("div", { className: "header-right d-flex align-items-center justify-content-center", children: [_jsx(Notifications, {}), _jsx(Profile, {}), _jsx("div", { className: "header-btn pe-md-0 d-lg-none", onClick: handleMegaMenuClick, children: _jsx("i", { className: "fi fi-rr-menu-burger" }) })] })] }) }) }));
};
export default Header;
