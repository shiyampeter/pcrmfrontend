import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const ApexBasicRadar = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const [series] = useState([
        {
            name: 'Basic Radar',
            data: [80, 50, 30, 40, 100, 20, 60],
        },
    ]);
    const options = {
        chart: {
            height: 350,
            type: 'radar',
            foreColor: '#adb5bd',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: false,
            },
        },
        colors: [themeColor],
        xaxis: {
            categories: ['SUN', 'SAR', 'MON', 'TUE', 'WEN', 'THU', 'FRI'],
        },
        tooltip: {
            theme: 'dark',
        },
    };
    return (_jsx(_Fragment, { children: _jsx(ReactApexChart, { options: options, series: series, type: "radar", height: 380 }) }));
};
export default ApexBasicRadar;
