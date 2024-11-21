import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import dataPrivacy from './data/dataPrivacy';
const PrivacyPolicyContent = () => {
    const [count, setCount] = useState(74);
    const [isYesButtonVisible, setIsYesButtonVisible] = useState(true);
    const [isNoButtonVisible, setIsNoButtonVisible] = useState(true);
    const handleButtonClick = (isYes) => {
        setCount((prevCount) => (isYes ? prevCount + 1 : prevCount));
        isYes ? toast.success('Thanks for your feedback!') : toast.error('We appreciate your feedback!');
        setIsYesButtonVisible(!isYes);
        setIsNoButtonVisible(isYes);
    };
    return (_jsxs(_Fragment, { children: [dataPrivacy.map((item, idx) => (_jsxs("div", { className: "mb-12", children: [_jsx("h5", { className: "mb-3", children: item.title }), _jsx("div", { dangerouslySetInnerHTML: { __html: item.desc } })] }, idx))), _jsxs("div", { className: "mt-8 mt-md-12 mt-lg-16", children: [_jsxs("p", { children: [count, " out of 86 found this helpful"] }), _jsx("h4", { className: "mb-4", children: "Was this article helpful?" }), _jsxs(Stack, { gap: 2, direction: "horizontal", children: [isYesButtonVisible && (_jsxs(Button, { variant: "", className: "btn btn-md btn-soft-success rounded-pill", onClick: () => handleButtonClick(true), children: [_jsx("i", { className: "fi fi-rr-social-network" }), _jsx("span", { className: "ms-2", children: "Yes!" })] })), isNoButtonVisible && (_jsxs(Button, { variant: "", className: "btn btn-md btn-soft-danger rounded-pill", onClick: () => handleButtonClick(false), children: [_jsx("i", { className: "fi fi-rr-hand" }), _jsx("span", { className: "ms-2", children: "No!" })] }))] })] })] }));
};
export default PrivacyPolicyContent;
