import React from 'react';

const PostSendCommentForm: React.FC = () => {
  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input type="text" placeholder="Write your comment" />
      </div>
    </div>
  );
};

export default PostSendCommentForm;
