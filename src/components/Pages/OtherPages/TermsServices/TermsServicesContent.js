import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import dataTerms from './data/dataTerms';
const TermsServicesContent = () => {
    const [count, setCount] = useState(86);
    const [isYesButtonVisible, setIsYesButtonVisible] = useState(true);
    const [isNoButtonVisible, setIsNoButtonVisible] = useState(true);
    const handleButtonClick = (isYes) => {
        setCount((prevCount) => (isYes ? prevCount + 1 : prevCount));
        isYes ? toast.success('Thanks for your feedback!') : toast.error('We appreciate your feedback!');
        setIsYesButtonVisible(!isYes);
        setIsNoButtonVisible(isYes);
    };
    const handleAccept = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Want to accept this terms of services',
            icon: 'success',
            confirmButtonColor: '#25b865',
            confirmButtonText: 'Yes, accept it!',
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success('Accepted successfully!');
            }
        });
    };
    const handleDecline = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Want to decline this terms of services',
            icon: 'error',
            confirmButtonColor: '#d33d33',
            confirmButtonText: 'Yes, decline it!',
        }).then((result) => {
            if (result.isConfirmed) {
                toast.error('Declined successfully!');
            }
        });
    };
    return (_jsxs(_Fragment, { children: [dataTerms.map((item, idx) => (_jsxs("div", { className: "mb-12", children: [_jsx("h5", { className: "mb-3", children: item.title }), _jsx("div", { dangerouslySetInnerHTML: { __html: item.desc } })] }, idx))), _jsxs("div", { className: "my-8 my-md-12 my-lg-16", children: [_jsxs("p", { children: [count, " out of 97 found this helpful"] }), _jsx("h4", { className: "mb-4", children: "Was this article helpful?" }), _jsxs(Stack, { gap: 2, direction: "horizontal", children: [isYesButtonVisible && (_jsxs(Button, { variant: "", className: "btn btn-md btn-soft-success rounded-pill", onClick: () => handleButtonClick(true), children: [_jsx("i", { className: "fi fi-rr-social-network" }), _jsx("span", { className: "ms-2", children: "Yes!" })] })), isNoButtonVisible && (_jsxs(Button, { variant: "", className: "btn btn-md btn-soft-danger rounded-pill", onClick: () => handleButtonClick(false), children: [_jsx("i", { className: "fi fi-rr-hand" }), _jsx("span", { className: "ms-2", children: "No!" })] }))] })] }), _jsx("hr", {}), _jsxs(Stack, { gap: 1, direction: "horizontal", className: "mt-8 mt-md-12 mt-lg-16 justify-content-center", children: [_jsx(Button, { variant: "", className: "btn btn-outline-danger rounded-pill", style: { width: '120px' }, onClick: handleDecline, children: "Decline" }), _jsx(Button, { variant: "", className: "btn btn-success rounded-pill", style: { width: '120px' }, onClick: handleAccept, children: "Accept" })] })] }));
};
export default TermsServicesContent;
