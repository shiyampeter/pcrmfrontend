import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Loading from '@/components/Misc/Loading';
import { Col, Row } from 'react-bootstrap';
import { GalleryOne, GalleryThree, GalleryTwo } from '.';
const AllsGallery = () => {
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { lg: 4, children: _jsx(GalleryOne, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryTwo, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryThree, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryTwo, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryThree, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryOne, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryThree, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryTwo, {}) }), _jsx(Col, { lg: 4, children: _jsx(GalleryThree, {}) }), _jsx(Col, { sm: 12, className: "text-center", children: _jsx(Loading, {}) })] }) }));
};
export default AllsGallery;
