import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import { ComposedChart, Line, Area, Bar, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer, } from 'recharts';
const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
];
const RechartComposed = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(_Fragment, { children: _jsx(ResponsiveContainer, { width: "100%", height: 350, children: _jsxs(ComposedChart, { data: data, margin: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }, children: [_jsx(CartesianGrid, { stroke: "#f5f5f5" }), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Area, { type: "monotone", dataKey: "amt", fill: themeColor, stroke: themeColor }), _jsx(Bar, { dataKey: "pv", barSize: 20, fill: themeColor }), _jsx(Line, { type: "monotone", dataKey: "uv", stroke: "#ff7300" }), _jsx(Scatter, { dataKey: "cnt", fill: "red" })] }) }) }));
};
export default RechartComposed;
