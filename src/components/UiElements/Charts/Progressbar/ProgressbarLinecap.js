import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ProgressbarLinecap = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(_Fragment, { children: _jsx(CircularProgressbar, { value: 60, text: `${60}%`, styles: {
                root: {
                    height: '15rem',
                },
                path: {
                    stroke: themeColor,
                    strokeWidth: '0.375rem',
                    strokeLinecap: 'round',
                },
                trail: {
                    stroke: '#EDEFF1',
                    strokeWidth: '0.15rem',
                },
                text: {
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    fill: themeColor,
                },
            } }) }));
};
export default ProgressbarLinecap;
