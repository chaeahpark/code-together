// https://www.npmjs.com/package/react-quilljs

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import MagicUrl from "quill-magic-url";
import { toolbarOptions } from "./EditorToolbar";

import { useProjects } from "../../contexts/ProjectContext";

const TextEditor = () => {
  const { postId } = useParams();
  const { setContent, postContent } = useProjects();

  const { quill, quillRef, Quill } = useQuill({
    modules: { magicUrl: true, toolbar: toolbarOptions },
  });

  useEffect(() => {
    if (quill) {
      // set initial value if there is a params on url.
      if (postId) {
        quill.clipboard.dangerouslyPasteHTML(`${postContent}`);
      }

      quill.on("text-change", (delta, oldDelta, source) => {
        // const quillDelta = quill.getContents().ops;
        const quillHtml = quill.root.innerHTML;
        setContent(quillHtml);
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
