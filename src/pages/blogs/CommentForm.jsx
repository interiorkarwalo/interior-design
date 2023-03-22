import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ onSubmit }) => {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(commentData);
    setCommentData({
      name: '',
      email: '',
      comment: '',
    });
    toast('Your comment is awaiting moderation.');
  };
  return (
    <>
      <form className="create-blog-form container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            value={commentData.name}
            onChange={(e) =>
              setCommentData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            value={commentData.email}
            onChange={(e) =>
              setCommentData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            required
            type="text"
            id="comment"
            value={commentData.comment}
            onChange={(e) =>
              setCommentData((prev) => ({ ...prev, comment: e.target.value }))
            }
          ></textarea>
        </div>

        <div className="form-btn-input">
          <button>Submit</button>
        </div>
        <ToastContainer style={{ fontSize: '1.2rem' }} />
      </form>
    </>
  );
};

export default CommentForm;
