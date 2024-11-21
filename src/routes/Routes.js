import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// All layouts containers
import DefaultLayout from '../Layouts/Default';
import VerticalLayout from '../Layouts/Vertical';
import HorizontalLayout from '../Layouts/Horizontal';
import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from './index';
import { ThemeSettings, useAuthContext, useThemeContext } from '../common/context';
const ThemeRoutes = (props) => {
    const { settings } = useThemeContext();
    const Layout = settings.layout.type === ThemeSettings.layout.type.vertical ? VerticalLayout : HorizontalLayout;
    const { isAuthenticated } = useAuthContext();
    return (_jsxs(React.Fragment, { children: [_jsxs(Routes, { children: [_jsx(Route, { children: publicProtectedFlattenRoutes.map((route, idx) => (_jsx(Route, { path: route.path, element: _jsx(DefaultLayout, { ...props, children: route.element }) }, idx))) }), _jsx(Route, { children: authProtectedFlattenRoutes.map((route, idx) => (_jsx(Route, { path: route.path, element: isAuthenticated === false ? (_jsx(Navigate, { to: {
                                    pathname: '/auth/minimal/login',
                                    search: 'next=' + route.path,
                                } })) : (_jsx(Layout, { ...props, children: route.element })) }, idx))) })] }), _jsx(Toaster, { position: "top-center" })] }));
};
export default ThemeRoutes;
