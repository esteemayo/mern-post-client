import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

import { getPosts, getLimit, deletePost } from "./../services/postService";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

const Home = () => {
  const [limit, setLimit] = useState(3);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [editingPost, setEditingPost] = useState({
    title: "",
    body: "",
    _id: null,
  });

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
      setLoading(false);
    };

    getPosts();
  }, []);

  const fetchPosts = async () => {
    const {
      data: {
        data: { docs },
      },
    } = await getPosts();
    return docs;
  };

  const addPost = (post) => {
    if (posts.find((p) => p._id === post._id)) {
      const index = posts.findIndex((p) => p._id === post._id);
      const updPost = [...posts];
      updPost.splice(index, 1, post);
      setPosts(updPost);
    } else {
      const newPost = [post, ...posts];
      setPosts(newPost);
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleDeletePost = async (id) => {
    const originalPost = posts;
    const post = originalPost.filter((p) => p._id !== id);
    setPosts(post);

    try {
      await deletePost(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This post has already been deleted!");
      setPosts(originalPost);
    }
  };

  const handlePostLimit = async () => {
    const {
      data: {
        data: { docs: posts },
      },
    } = await getLimit(limit);
    setPosts(posts);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Button
            icon={showAddPost ? <FaTimes /> : ""}
            text={showAddPost ? "Close" : "Add Post"}
            color={showAddPost ? "btn-outline-danger" : "btn-outline-success"}
            onClick={() => setShowAddPost(!showAddPost)}
          />
          <br />
          <br />
          {showAddPost && (
            <PostForm addPost={addPost} editingPost={editingPost} />
          )}
        </div>
        <div className="col-md-3 offset-md-3">
          <p>Limit number of posts</p>
          <div className="form-outline mb-2">
            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="form-control"
            />
          </div>
          <button
            onClick={handlePostLimit}
            className="btn btn-outline-primary btn-block"
          >
            SET
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
