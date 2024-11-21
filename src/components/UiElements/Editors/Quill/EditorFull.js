import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class EditorFull extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "modules", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                toolbar: [
                    [
                        {
                            header: [1, 2, 3, 4, 5, 6],
                        },
                    ],
                    [
                        {
                            font: [],
                        },
                        {
                            size: [],
                        },
                    ],
                    ['bold', 'italic', 'underline', 'strike'],
                    [
                        {
                            color: [],
                        },
                        {
                            background: [],
                        },
                    ],
                    [
                        {
                            script: 'super',
                        },
                        {
                            script: 'sub',
                        },
                    ],
                    ['blockquote', 'code-block'],
                    [
                        {
                            list: 'ordered',
                        },
                        {
                            list: 'bullet',
                        },
                        {
                            indent: '-1',
                        },
                        {
                            indent: '+1',
                        },
                    ],
                    [
                        'direction',
                        {
                            align: [],
                        },
                    ],
                    ['link', 'image', 'video', 'formula'],
                    ['clean'],
                ],
            }
        });
        Object.defineProperty(this, "formats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [
                'header',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'list',
                'bullet',
                'indent',
                'link',
                'image',
            ]
        });
        Object.defineProperty(this, "handleChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (text) => {
                this.setState({ text });
            }
        });
        this.state = {
            text: '',
        };
    }
    render() {
        return (_jsx("div", { className: "text-editor", style: { height: '240px' }, children: _jsx(ReactQuill, { theme: "snow", modules: this.modules, formats: this.formats, value: this.state.text, onChange: this.handleChange, style: { height: '200px' }, placeholder: 'Compose an epic...' }) }));
    }
}
export default EditorFull;
