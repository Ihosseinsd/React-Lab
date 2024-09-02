import React, { forwardRef } from "react";
import SelectBox from "./SelectBox";

const AddComment = forwardRef(function AddComment({ name }, ref, state) {
  return (
    <div className="ac-wrapper" ref={ref}>
      {name ? (
        <h2 className="addCommentTitle">
          Write your comment in response to {name}
        </h2>
      ) : (
        <h2 className="addCommentTitle">Write your comment:</h2>
      )}

      <form action="" className="form">
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
        {name && <SelectBox name={name} />}
        <textarea
          placeholder="message..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
        {name && <button>Cancel</button>}
      </form>
    </div>
  );
});

export default AddComment;
