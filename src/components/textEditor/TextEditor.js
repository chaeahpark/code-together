import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import MagicUrl from "quill-magic-url";
import { toolbarOptions } from "./EditorToolbar";

import { useProjects } from "../../contexts/ProjectContext";

const TextEditor = () => {
  const { setContent, postContent } = useProjects();

  const { quill, quillRef, Quill } = useQuill({
    modules: { magicUrl: true, toolbar: toolbarOptions },
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        const quillDelta = quill.getContents().ops;
        setContent(quillDelta);
      });
    }
  }, [quill]);

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
