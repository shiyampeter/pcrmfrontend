import { jsx as _jsx } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChartJsPolarArea() {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const options = {
        cutout: 120,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    font: {
                        color: '#adb5bd',
                        family: 'Inter, sans-serif',
                    },
                },
            },
        },
    };
    const data = {
        labels: ['Sumi', 'Swapan', 'Sojib', 'Swampa', 'Sowrav'],
        datasets: [
            {
                data: [30, 25, 30, 25, 30],
                backgroundColor: [themeColor, '#e83e8c', '#EEF1F3', '#e49e3d', '#3dc7be'],
            },
        ],
    };
    return _jsx(PolarArea, { options: options, data: data, height: 400 });
}
