import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Image } from 'react-bootstrap';
import bell from '@/assets/images/general/bell.svg';
import banner from '@/assets/images/general/banner.png';
const alerts = [
    {
        variant: 'primary',
        dismissible: true,
        closeVariant: 'white',
        style: null,
    },
    {
        variant: 'primary',
        dismissible: true,
        closeVariant: 'white',
        style: {
            background: 'linear-gradient(135deg, rgba(188, 26, 78, 1) 0%, rgba(0, 79, 230, 1) 100%)',
        },
    },
    {
        variant: 'primary',
        dismissible: true,
        closeVariant: 'white',
        style: {
            background: `linear-gradient(135deg, rgba(188, 26, 78, 0.5) 0%, rgba(0, 79, 230, 0.5) 100%), url(${banner}) no-repeat top center / cover`,
        },
    },
];
const MiscAlert = () => {
    return (_jsx(_Fragment, { children: alerts.map((alert, index) => (_jsx(AlertComponent, { ...alert }, index))) }));
};
const AlertComponent = ({ variant, dismissible, closeVariant, style }) => {
    return (_jsx(Alert, { dismissible: dismissible, variant: variant, closeVariant: closeVariant, style: style ?? undefined, className: "text-bg-primary text-white", children: _jsxs("div", { className: "d-flex align-items-center", children: [_jsx(Image, { src: bell, className: "rounded me-2" }), _jsxs("div", { className: "flex-grow-1", children: [_jsx("strong", { children: "Notify!" }), " Lorem Ipsum is simply dummy text of the printing."] })] }) }));
};
export default MiscAlert;
