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
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};
export default TextEditor;
