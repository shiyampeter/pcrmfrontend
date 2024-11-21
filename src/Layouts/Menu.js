import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { findAllParent, findMenuItem } from '@/common';
const scrollTo = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1)
            return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    const animateScroll = () => {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
};
const MenuItemWithChildren = ({ item, linkClassName, subMenuClassNames, activeMenuItems, toggleMenu, }) => {
    const [open, setOpen] = useState(activeMenuItems.includes(item.key));
    useEffect(() => {
        setOpen(activeMenuItems.includes(item.key));
    }, [activeMenuItems, item]);
    const toggleMenuItem = (e) => {
        e.preventDefault();
        const status = !open;
        setOpen(status);
        if (toggleMenu)
            toggleMenu(item, status);
        // if (status) {
        //   setActiveMenuItems([item.key, ...findAllParent(menuItems, item)]);
        // } else {
        //   setActiveMenuItems((prevActiveMenuItems) => prevActiveMenuItems.filter((key) => key !== item.key));
        // }
    };
    return (_jsxs("li", { className: `nav-item ${open ? 'active' : ''}`, children: [_jsxs(Link, { to: "#", className: `nav-link ${linkClassName} ${activeMenuItems.includes(item.key) ? 'open' : ''}`, "aria-expanded": open, "data-menu-key": item.key, onClick: toggleMenuItem, children: [item.icon && _jsx("i", { className: item.icon }), _jsx("span", { className: "menu-arrow" }), _jsxs("span", { children: [" ", item.label] })] }), _jsx(Collapse, { in: open, children: _jsx("div", { children: _jsx("ul", { className: `nav-sub-menu ${subMenuClassNames}`, children: (item.children || []).map((child, idx) => {
                            return (_jsx(React.Fragment, { children: child.children ? (_jsx(MenuItemWithChildren, { item: child, linkClassName: activeMenuItems.includes(child.key) ? 'active' : '', activeMenuItems: activeMenuItems, subMenuClassNames: "sub-menu", toggleMenu: toggleMenu })) : (_jsx(MenuItem, { item: child, className: activeMenuItems.includes(child.key) ? 'active' : '', linkClassName: activeMenuItems.includes(child.key) ? 'active' : '' })) }, idx));
                        }) }) }) })] }));
};
const MenuItem = ({ item, className, linkClassName }) => {
    return (_jsx("li", { className: `nav-item ${className}`, children: _jsx(MenuItemLink, { item: item, className: linkClassName }) }));
};
const MenuItemLink = ({ item, className }) => {
    return (_jsxs(Link, { to: item.url, target: item.target, className: `nav-link-ref ${className}`, "data-menu-key": item.key, children: [item.icon && _jsx("i", { className: item.icon }), _jsxs("span", { children: [" ", item.label] })] }));
};
const AppMenu = ({ menuItems }) => {
    const location = useLocation();
    const menuRef = useRef(null);
    const [activeMenuItems, setActiveMenuItems] = useState([]);
    const toggleMenu = (menuItem, show) => {
        if (show) {
            setActiveMenuItems([menuItem['key'], ...findAllParent(menuItems, menuItem)]);
        }
    };
    const activeMenu = useCallback(() => {
        const div = document.getElementById('main-menu');
        let matchingMenuItem = null;
        if (div) {
            const items = div.getElementsByClassName('nav-link-ref');
            for (let i = 0; i < items.length; ++i) {
                let trimmedURL = location?.pathname?.replaceAll(process.env.PUBLIC_URL ?? '', '');
                const url = items[i].pathname;
                if (trimmedURL === process.env.PUBLIC_URL + '/') {
                    trimmedURL += 'ecommerce';
                }
                if (trimmedURL === url?.replaceAll(process.env.PUBLIC_URL, '')) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                const mid = matchingMenuItem.getAttribute('data-menu-key');
                const activeMt = findMenuItem(menuItems, mid);
                if (activeMt) {
                    setActiveMenuItems([activeMt['key'], ...findAllParent(menuItems, activeMt)]);
                }
                setTimeout(function () {
                    const activatedItem = matchingMenuItem;
                    if (activatedItem != null) {
                        const simplebarContent = document.querySelector('#leftside-menu-container .simplebar-content-wrapper');
                        const offset = activatedItem.offsetTop - 300;
                        if (simplebarContent && offset > 100) {
                            scrollTo(simplebarContent, offset, 600);
                        }
                    }
                }, 200);
            }
        }
    }, [location, menuItems]);
    useEffect(() => {
        activeMenu();
    }, [activeMenu, location]);
    return (_jsx(_Fragment, { children: _jsx("ul", { className: "side-nav", ref: menuRef, id: "main-menu", children: (menuItems || []).map((item, idx) => {
                return (_jsx(React.Fragment, { children: item.isTitle ? (_jsx("li", { className: "nav-title", children: item.label })) : (_jsx(_Fragment, { children: item.children ? (_jsx(MenuItemWithChildren, { item: item, toggleMenu: toggleMenu, subMenuClassNames: "", activeMenuItems: activeMenuItems, linkClassName: "nav-link" })) : (_jsx(MenuItem, { item: item, linkClassName: "nav-link", className: activeMenuItems.includes(item.key) ? 'active' : '' })) })) }, idx));
            }) }) }));
};
export default AppMenu;
