import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ProgressbarFilled = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(_Fragment, { children: _jsx(CircularProgressbar, { value: 60, text: `${60}%`, strokeWidth: 50, styles: {
                root: {
                    height: '15rem',
                },
                path: {
                    stroke: themeColor,
                    strokeLinecap: 'butt',
                },
                trail: {
                    stroke: '#EDEFF1',
                },
                text: {
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    fill: themeColor,
                },
            } }) }));
};
export default ProgressbarFilled;
