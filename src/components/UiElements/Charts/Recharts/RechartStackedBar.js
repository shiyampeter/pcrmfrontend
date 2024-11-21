import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const generateRandomData = () => {
    const getRandomValue = () => Math.floor(Math.random() * 5000);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return Array.from({ length: 12 }, () => ({
        name: months,
        leads: getRandomValue(),
        active: getRandomValue(),
        pending: getRandomValue(),
        resolved: getRandomValue(),
        calcelled: getRandomValue(),
        amt: getRandomValue(),
    }));
};
const data = generateRandomData();
const RechartStackedBar = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(_Fragment, { children: _jsx(ResponsiveContainer, { width: "100%", height: 350, children: _jsxs(BarChart, { data: data, margin: {
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }, barCategoryGap: 40, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Bar, { dataKey: "leads", stackId: "a", fill: "#00275E" }), _jsx(Bar, { dataKey: "active", stackId: "a", fill: "#85D00B" }), _jsx(Bar, { dataKey: "pending", stackId: "a", fill: themeColor }), _jsx(Bar, { dataKey: "resolved", stackId: "a", fill: "#00CCCC" }), _jsx(Bar, { dataKey: "calcelled", stackId: "a", fill: "#6610F2" })] }) }) }));
};
export default RechartStackedBar;
