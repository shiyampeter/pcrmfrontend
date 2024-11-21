import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, ListGroup } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
import dataActivityShort from './data/dataActivityShort';
const ActivityComponentShort = () => {
    return (_jsx(_Fragment, { children: _jsx(Card, { children: _jsx(Card.Body, { children: _jsxs(ListGroup, { className: "list-group-timeline list-group list-group-flush ms-3", children: [dataActivityShort.map(({ icon, content }, idx) => (_jsxs(ListGroup.Item, { className: "list-timeline-item border-start border-dashed border-bottom-0 ps-8 mb-2", children: [_jsx("div", { className: "list-timeline-icon avatar avatar-md border position-absolute bg-body-tertiary", style: { left: '-1.25rem' }, children: _jsx("i", { className: `${icon}` }) }), _jsx("div", { className: "list-timeline-content", dangerouslySetInnerHTML: { __html: content } })] }, idx))), _jsx(ListGroup.Item, { className: "list-timeline-item border-start border-dashed border-bottom-0 ps-8", children: _jsx(Loading, {}) })] }) }) }) }));
};
export default ActivityComponentShort;
