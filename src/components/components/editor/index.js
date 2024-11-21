import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
function EditorField(props) {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Editor, { apiKey: "your-api-key", onInit: (evt, editor) => (editorRef.current = editor), initialValue: "<p>Online Document Editor.</p>", init: {
                    height: 500,
                    menubar: false,
                    plugins: 'powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap tinycomments linkchecker emoticons advtable export print autosave',
                    toolbar: 'undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat',
                    height: '700px',
                    toolbar_sticky: true,
                    icons: 'thin',
                    skin: 'material-classic',
                    icons: 'material',
                    content_style: 'material-classic',
                } }), _jsx("button", { onClick: log, children: "Log editor content" })] }));
}
export default EditorField;
