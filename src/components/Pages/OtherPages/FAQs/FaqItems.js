import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Accordion, Col, Row } from 'react-bootstrap';
const faqs1 = [
    {
        question: 'Can I change my plan later?',
        answer: "Yes! you can try us for free for 30 days. If you want, we'll provide you with a free personalize 30-minutes onbording call to get you up and running.",
    },
    {
        question: 'How do you process payments?',
        answer: 'We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: '2Checkout accepts all types of credit and debit cards.',
    },
    {
        question: 'Do you have a money-back guarantee?',
        answer: 'Yes. You may request a refund within 30 days of your purchase without any additional explanations.',
    },
    {
        question: 'I have more questions. Where can I get help?',
        answer: "Please contact us if you have any other questions or concerns. We're here to help!",
    },
];
const faqs2 = [
    {
        question: 'How do you process payments?',
        answer: 'We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.',
    },
    {
        question: 'Can I change my plan later?',
        answer: "Yes! you can try us for free for 30 days. If you want, we'll provide you with a free personalize 30-minutes onbording call to get you up and running.",
    },
    {
        question: 'What payment methods do you accept?',
        answer: '2Checkout accepts all types of credit and debit cards.',
    },
    {
        question: 'I have more questions. Where can I get help?',
        answer: "Please contact us if you have any other questions or concerns. We're here to help!",
    },
    {
        question: 'Do you have a money-back guarantee?',
        answer: 'Yes. You may request a refund within 30 days of your purchase without any additional explanations.',
    },
];
const FaqItems = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "mx-auto", style: { maxWidth: '960px' }, children: [_jsxs("div", { className: "mb-8 mb-md-12 mb-lg-16 text-center mx-auto", style: { maxWidth: '600px' }, children: [_jsx("p", { className: "fw-semibold text-primary mb-3", children: "FAQ'S" }), _jsx("h2", { className: "fw-bold text-dark mb-3", children: "Frequently asked questions" }), _jsx("p", { className: "lead", children: "Everything you need to know about the product and billing." })] }), _jsxs(Row, { children: [_jsx(Col, { lg: 6, children: _jsx(Accordion, { className: "accordion-icon", defaultActiveKey: "0", children: faqs1.map(({ question, answer }, idx) => (_jsxs(Accordion.Item, { eventKey: (idx + 1).toString(), className: "border-top mt-2 rounded-top", children: [_jsx(Accordion.Header, { children: question }), _jsx(Accordion.Body, { children: answer })] }, idx))) }) }), _jsx(Col, { lg: 6, children: _jsx(Accordion, { className: "accordion-icon", defaultActiveKey: "0", children: faqs2.map(({ question, answer }, idx) => (_jsxs(Accordion.Item, { eventKey: (idx + 1).toString(), className: "border-top mt-2 rounded-top", children: [_jsx(Accordion.Header, { children: question }), _jsx(Accordion.Body, { children: answer })] }, idx))) }) })] }), ' '] }) }));
};
export default FaqItems;
