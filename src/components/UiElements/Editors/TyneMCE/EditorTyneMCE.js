import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const EditorTyneMCE = () => {
    const editorRef = useRef(null);
    const handleEditorInit = (editor) => {
        if (editorRef.current) {
            editorRef.current = editor;
        }
    };
    return (_jsx(_Fragment, { children: _jsx(Editor, { onInit: handleEditorInit, init: {
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
            } }) }));
};
export default EditorTyneMCE;
