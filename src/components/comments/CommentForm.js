import { useState } from "react";

const CommentForm = ({
  submitLabel,
  handleSubmit,
  handleCancel = false,
  initialText = "",
  hasCancelButton,
}) => {
  const [text, setText] = useState(initialText);
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
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
