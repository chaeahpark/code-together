import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const TextEditor = () => {
  const { quill, quillRef } = useQuill();

  console.log(quill); // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default TextEditor;
