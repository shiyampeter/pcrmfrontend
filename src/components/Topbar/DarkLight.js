import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeSettings, useThemeContext } from '@/common/context';
const DarkLight = () => {
    const toggleDarkMode = () => {
        if (settings.theme === 'dark') {
            updateSettings({ theme: ThemeSettings.theme.light });
        }
        else {
            updateSettings({ theme: ThemeSettings.theme.dark });
        }
    };
    const { settings, updateSettings } = useThemeContext();
    return (_jsx("div", { children: _jsx("div", { className: "header-btn", children: _jsx("div", { id: "light-dark-mode", onClick: toggleDarkMode, children: _jsx("i", { className: "dark-light-icon-toggle fi fi-rr-moon fs-20" }) }) }) }));
};
export default DarkLight;
