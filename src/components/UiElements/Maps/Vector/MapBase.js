import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const MapBase = ({ width, height, options, type }) => {
    const selectorId = type + new Date().getTime();
    const [map, setMap] = useState();
    useEffect(() => {
        if (!map) {
            const map = new window['jsVectorMap']({
                selector: '#' + selectorId,
                map: type,
                ...options,
            });
            setMap(map);
        }
    }, [selectorId, map, options, type]);
    return (_jsx(_Fragment, { children: _jsx("div", { id: selectorId, style: { width: width, height: height } }) }));
};
export default MapBase;
