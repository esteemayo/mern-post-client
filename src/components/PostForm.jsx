import React, { useEffect, useState } from "react";

import { createPost, updatePost } from "./../services/postService";
import Loader from "./Loader";
import Input from "./Input";

const PostForm = ({ addPost, editingPost }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    setValues(editingPost);
  }, [editingPost]);

  const handleChange = ({ target: input }) => {
    setValues({ ...values, [input.name]: input.value });
  };

  const validateForm = () => {
    const errors = {};

    if (values.title.trim() === "") {
      errors.title = "Title must not be empty!";
    }

    if (values.body.trim() === "") {
      errors.body = "Body must not be empty!";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setErrors({});

    if (values._id) {
      const {
        data: {
          data: { doc: post },
        },
      } = await updatePost(values._id, values);
      addPost(post);
      setValues({ title: "", body: "" });
      setLoading(false);
    } else {
      const {
        data: {
          data: { doc: post },
        },
      } = await createPost(values);
      addPost(post);
      setValues({ title: "", body: "" });
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            label="Name"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
          />

          <Input
            type="text"
            name="body"
            label="Body"
            value={values.body}
            onChange={handleChange}
            error={errors.body}
          />

          <button
            type="submit"
            className="btn btn-outline-primary btn-block mb-4"
          >
            {values._id ? "UPDATE" : "ADD"}
          </button>
        </form>
      )}
    </>
  );
};

export default PostForm;
