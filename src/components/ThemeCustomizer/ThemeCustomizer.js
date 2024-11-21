import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeSettings } from '@/common/context';
import ColorScheme from './ColorScheme';
import ContentLayout from './ContentLayout';
import ContentSkin from './ContentSkin';
import HeaderSkin from './HeaderSkin';
import NavigationMenu from './NavigationMenu';
import NavigationSkin from './NavigationSkin';
import NavigationType from './NavigationType';
import SidenavType from './SidenavType';
import SkinMode from './SkinMode';
import ThemeFont from './ThemeFont';
import useThemeCustomizer from './useThemeCustomizer';
const ThemeCustomizer = () => {
    const { colorScheme, navigationType, skinMode, themeFont, contentLayout, headerSkin, navigationSkin, navigationMenu, sidenavType, contentSkin, handleChangeColorScheme, handleChangeNavigationType, handleChangeSkinMode, handleChangeThemeFont, handleChangeContentLayout, handleChangeHeaderSkin, handleChangeNavigationSkin, handleChangeNavigationMenu, handleChangeSidenavType, handleChangeContentSkin, } = useThemeCustomizer();
    const renderSidenavType = () => {
        if (navigationType === ThemeSettings.layout.type.horizontal) {
            return null;
        }
        return (_jsxs(_Fragment, { children: [_jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(SidenavType, { handleChangeSidenavType: handleChangeSidenavType, sidenavType: sidenavType, sidenavConstants: ThemeSettings.sidebar.size }) })] }));
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "p-4", children: _jsx(ColorScheme, { handleChangeColorScheme: handleChangeColorScheme, colorScheme: colorScheme, schemeConstants: ThemeSettings.color }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(NavigationType, { handleChangeNavigationType: handleChangeNavigationType, navigationType: navigationType, navtypeConstants: ThemeSettings.layout.type }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(ContentLayout, { handleChangeContentLayout: handleChangeContentLayout, contentLayout: contentLayout, layoutConstants: ThemeSettings.layout.mode }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(SkinMode, { handleChangeSkinMode: handleChangeSkinMode, skinMode: skinMode, skinmodeConstants: ThemeSettings.theme }) }), renderSidenavType(), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(NavigationSkin, { handleChangeNavigationSkin: handleChangeNavigationSkin, navigationSkin: navigationSkin, navskinConstants: ThemeSettings.sidebar.theme }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(NavigationMenu, { handleChangeNavigationMenu: handleChangeNavigationMenu, navigationMenu: navigationMenu, navmenuConstants: ThemeSettings.sidebar.menu }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(HeaderSkin, { handleChangeHeaderSkin: handleChangeHeaderSkin, headerSkin: headerSkin, headerConstants: ThemeSettings.header.theme }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(ContentSkin, { handleChangeContentSkin: handleChangeContentSkin, contentSkin: contentSkin, contentConstants: ThemeSettings.layout.contentSkin }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(ThemeFont, { handleChangeThemeFont: handleChangeThemeFont, themeFont: themeFont, fontConstants: ThemeSettings.font }) })] }));
};
export default ThemeCustomizer;
