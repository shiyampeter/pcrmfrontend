import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import { CircularProgressbar } from 'react-circular-progressbar';
import ChangingProgressProvider from './provider/ChangingProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
const ProgressbarAnimationReactMove = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    return (_jsx(_Fragment, { children: _jsx(ChangingProgressProvider, { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], children: (value) => (_jsx(CircularProgressbar, { value: value, text: `${value}%`, styles: {
                    root: {
                        height: '15rem',
                    },
                    path: {
                        stroke: themeColor,
                        strokeWidth: '0.375rem',
                    },
                    trail: {
                        stroke: '#EDEFF1',
                        strokeWidth: '0.375rem',
                    },
                    text: {
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        fill: themeColor,
                    },
                } })) }) }));
};
export default ProgressbarAnimationReactMove;
