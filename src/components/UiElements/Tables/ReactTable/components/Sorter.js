import { jsx as _jsx } from "react/jsx-runtime";
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
const getIcon = (sort) => {
    if (sort === 'asc') {
        return _jsx(FaSortUp, {});
    }
    else {
        return _jsx(FaSortDown, {});
    }
};
const Sorter = ({ sort }) => {
    if (sort === false) {
        return _jsx(FaSort, { style: { width: '12px', height: '12px' } });
    }
    return _jsx("span", { className: "text-primary", children: getIcon(sort) });
};
export default Sorter;
