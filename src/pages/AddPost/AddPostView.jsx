const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new post</h2>
      <fieldset>
        <label>User name</label>
        <input
          onChange={(e) => onInputChange("user", e.target.value)}
          type="text"
          placeholder="eg:Linda"
        />
      </fieldset>

      <fieldset>
        <label>Title</label>
        <input
          onChange={(e) => onInputChange("title", e.target.value)}
          type="text"
          placeholder="eg: MVC Pattern"
        />
      </fieldset>

      <fieldset>
        <label>Explanation</label>
        <textarea
          onChange={(e) => onInputChange("text", e.target.value)}
          type="text"
          placeholder="Write an explanation..."
          maxLength={"100"}
        />
      </fieldset>

      <button>Send</button>
    </form>
  );
};

export default AddPostView;
