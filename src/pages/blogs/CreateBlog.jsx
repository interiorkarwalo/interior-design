import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/api';
import './create-blog.css';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    imageUrl: '',
    desc: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post(
        '/post',
        { ...blogData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      navigate('/blogs');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div>
        <h1>Create New Blog</h1>
      </div>
      <form onSubmit={handleSubmit} className="create-blog-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={blogData.title}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={blogData.desc}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, desc: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            value={blogData.imageUrl}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
          />
        </div>

        <button type="submit">Submit</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  );
};

export default CreateBlog;
