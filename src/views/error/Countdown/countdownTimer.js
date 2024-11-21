import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
};
const renderTime = (dimension, time) => {
    return (_jsxs("div", { className: "time-wrapper", style: { lineHeight: '1.2' }, children: [_jsx("div", { className: `fs-16 fw-bold text-dark`, children: time }), _jsx("div", { className: "fs-13 fw-normal text-muted", children: dimension })] }));
};
const CountdownTimer = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const stratTime = Date.now() / 1000;
    const endTime = stratTime + 243248;
    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
    const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
    const getTimeDays = (time) => (time / daySeconds) | 0;
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    const timers = [
        { duration: daysDuration, getTime: getTimeDays, unit: 'Days' },
        { duration: daySeconds, getTime: getTimeHours, unit: 'Hrs' },
        { duration: hourSeconds, getTime: getTimeMinutes, unit: 'Mins' },
        { duration: minuteSeconds, getTime: getTimeSeconds, unit: 'Secs' },
    ];
    return (_jsx(_Fragment, { children: _jsx(Row, { className: "gy-12", children: timers.map(({ duration, unit }, index) => (_jsx(Col, { xs: 6, sm: 3, className: "d-flex align-items-center justify-content-center", children: _jsx(CountdownCircleTimer, { ...timerProps, size: 80, strokeWidth: 4, colors: themeColor, trailColor: '#edeff1', duration: duration, initialRemainingTime: remainingTime % duration, onComplete: (totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > duration,
                    }), children: ({ elapsedTime }) => (_jsx("div", { children: renderTime(unit, timers[index].getTime(duration - elapsedTime)) })) }) }, index))) }) }));
};
export default CountdownTimer;
