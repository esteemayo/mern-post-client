import React from "react";
import Moment from "react-moment";
import { FaPen, FaTimesCircle } from "react-icons/fa";

import Button from "./Button";

const PostCard = ({ post, onEdit, onDelete }) => {
  const { title, body, createdAt } = post;

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            <Moment fromNow>{createdAt}</Moment>
          </p>
          <p className="card-text">
            {body.split(" ").slice(0, 19).join(" ")}...
          </p>
        </div>
        <div className="card-footer text-muted">
          <Button
            // text="Edit"
            icon={<FaPen />}
            color="btn-outline-primary mr-3"
            onClick={() => onEdit(post)}
          />

          <Button
            // text="Delete"
            icon={<FaTimesCircle />}
            color="btn-outline-danger my-1"
            onClick={() => onDelete(post._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
