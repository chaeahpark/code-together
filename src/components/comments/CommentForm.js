import { useState } from "react";

const CommentForm = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
    </form>
  );
};

export default CommentForm;
