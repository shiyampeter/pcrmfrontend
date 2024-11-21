import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ReactApexChart from 'react-apexcharts';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const ApexSimplePie = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const series = [44, 55, 13, 43, 22];
    const options = {
        chart: {
            width: 380,
            type: 'pie',
            foreColor: '#adb5bd',
            fontFamily: 'Inter, sans-serif',
        },
        colors: ['#00275E', themeColor, '#85D00B', '#00CCCC', '#6610F2'],
        labels: ['Sumi', 'Swapan', 'Sojib', 'Swampa', 'Sowrav'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
        legend: {
            show: true,
            position: 'bottom',
            itemMargin: {
                vertical: 15,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: 'dark',
        },
    };
    return (_jsx(_Fragment, { children: _jsx(ReactApexChart, { options: options, series: series, type: "pie", height: 380 }) }));
};
export default ApexSimplePie;
