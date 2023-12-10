import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();

  const model = new AddPostModel();

  const [form, setForm] = useState(model.state);

  const onInputChange = (label, value) => {
    const copyState = { ...form };

    copyState[label] = value;

    setForm(copyState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert("Please fill in all fields.");
      return;
    }

    axios.post("http://localhost:3000/posts", form).then(() => navigate("/"));
  };

  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;
