import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const ApexRadarMultiple = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const [series] = useState([
        {
            name: 'Revenue',
            data: [80, 50, 30, 40, 100, 20],
        },
        {
            name: 'Expenses',
            data: [20, 30, 40, 80, 20, 80],
        },
        {
            name: 'Profit',
            data: [44, 76, 78, 13, 43, 10],
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
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1,
            },
        },
        colors: ['#85D00B', themeColor, '#00CCCC'],
        xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
        },
        stroke: {
            width: 2,
        },
        fill: {
            opacity: 0.1,
        },
        markers: {
            size: 0,
        },
        legend: {
            show: false,
        },
        tooltip: {
            theme: 'dark',
        },
    };
    return (_jsx(_Fragment, { children: _jsx(ReactApexChart, { options: options, series: series, type: "radar", height: 380 }) }));
};
export default ApexRadarMultiple;
