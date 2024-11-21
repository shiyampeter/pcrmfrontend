import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    return (_jsxs("g", { children: [_jsx("text", { x: cx, y: cy, dy: 8, textAnchor: "middle", fill: fill, children: payload.name }), _jsx(Sector, { cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle, fill: fill }), _jsx(Sector, { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, fill: fill }), _jsx("path", { d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`, stroke: fill, fill: "none" }), _jsx("circle", { cx: ex, cy: ey, r: 2, fill: fill, stroke: "none" }), _jsx("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, textAnchor: textAnchor, fill: "#333", children: `PV ${value}` }), _jsx("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: "#999", children: `(Rate ${(percent * 100).toFixed(2)}%)` })] }));
};
const RechartShapePie = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePieEnter = (_, index) => {
        setActiveIndex(index);
    };
    return (_jsx(ResponsiveContainer, { width: "100%", height: 400, children: _jsx(PieChart, { children: _jsx(Pie, { activeIndex: activeIndex, activeShape: renderActiveShape, data: data, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 80, fill: themeColor, dataKey: "value", onMouseEnter: handlePieEnter }) }) }));
};
export default RechartShapePie;
