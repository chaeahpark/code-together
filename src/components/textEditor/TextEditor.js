import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import MagicUrl from "quill-magic-url";
import { toolbarOptions } from "./EditorToolbar";

const TextEditor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { magicUrl: true, toolbar: toolbarOptions },
  });

  if (Quill && !quill) {
    Quill.register("modules/magicUrl", MagicUrl);
  }

  return (
    <div className="textEditor-wrapper">
      <div style={{ height: 300 }}>
        <div ref={quillRef} />
      </div>
    </div>
  );
};
export default TextEditor;
