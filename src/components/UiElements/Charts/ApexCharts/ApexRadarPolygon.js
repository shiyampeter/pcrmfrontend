import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const ApexRadarMultiple = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const series = [
        {
            name: 'Radar Polygon',
            data: [20, 100, 40, 30, 50, 80, 33],
        },
    ];
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
        dataLabels: {
            enabled: true,
        },
        plotOptions: {
            radar: {
                size: 140,
            },
        },
        colors: [themeColor],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeWidth: 2,
        },
        tooltip: {
            theme: 'dark',
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
    };
    return (_jsx(_Fragment, { children: _jsx(ReactApexChart, { options: options, series: series, type: "radar", height: 380 }) }));
};
export default ApexRadarMultiple;
