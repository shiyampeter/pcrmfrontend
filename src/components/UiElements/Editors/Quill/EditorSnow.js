import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const EditorSnow = () => {
    const [value, setValue] = useState('');
    return (_jsx(_Fragment, { children: _jsx("div", { style: { height: '240px' }, children: _jsx(ReactQuill, { theme: "snow", value: value, onChange: setValue, style: { height: '200px' }, placeholder: 'Compose an epic...' }) }) }));
};
export default EditorSnow;
