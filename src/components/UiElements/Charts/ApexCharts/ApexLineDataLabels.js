import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const ApexLineDataLabels = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const series = [
        {
            name: 'High - 2023',
            data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
            name: 'Low - 2023',
            data: [12, 11, 14, 18, 17, 13, 13],
        },
    ];
    const options = {
        chart: {
            height: 350,
            type: 'line',
            foreColor: '#adb5bd',
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: false,
            },
        },
        colors: ['#25b865', themeColor],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth',
        },
        grid: {
            show: false,
        },
        markers: {
            size: 1,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month',
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                text: 'Temperature',
            },
            min: 5,
            max: 40,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5,
        },
        tooltip: {
            theme: 'dark',
        },
    };
    return (_jsx(_Fragment, { children: _jsx(ReactApexChart, { options: options, series: series, type: "line", height: 350 }) }));
};
export default ApexLineDataLabels;