import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeSettings } from '@/common/context';
import ColorScheme from './ColorScheme';
import ContentSkin from './ContentSkin';
import SkinMode from './SkinMode';
import ThemeFont from './ThemeFont';
import useThemeCustomizer from './useThemeCustomizer';
const ThemeCustomizerPublic = () => {
    const { colorScheme, skinMode, themeFont, contentSkin, handleChangeColorScheme, handleChangeSkinMode, handleChangeThemeFont, handleChangeContentSkin, } = useThemeCustomizer();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "p-4", children: _jsx(ColorScheme, { handleChangeColorScheme: handleChangeColorScheme, colorScheme: colorScheme, schemeConstants: ThemeSettings.color }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(ContentSkin, { handleChangeContentSkin: handleChangeContentSkin, contentSkin: contentSkin, contentConstants: ThemeSettings.layout.contentSkin }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(SkinMode, { handleChangeSkinMode: handleChangeSkinMode, skinMode: skinMode, skinmodeConstants: ThemeSettings.theme }) }), _jsx("hr", { className: "mb-0 mt-2" }), _jsx("div", { className: "p-4", children: _jsx(ThemeFont, { handleChangeThemeFont: handleChangeThemeFont, themeFont: themeFont, fontConstants: ThemeSettings.font }) })] }));
};
export default ThemeCustomizerPublic;
