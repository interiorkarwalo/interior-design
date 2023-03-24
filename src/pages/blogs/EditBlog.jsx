import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../utils/api';
import './create-blog.css';

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blogData, setBlogData] = useState({
    title: '',
    imageUrl: '',
    desc: '',
  });

  useEffect(() => {
    const fetchSingleBlogData = async () => {
      const { data } = await axios.get(
        `https://api.interiorkarwalo.com/api/v1/user/post/${id}`
      );
      setBlogData(data.data);
    };
    fetchSingleBlogData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.put(
        `/post/${id}`,
        { ...blogData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('blogToken')}`,
          },
        }
      );
      navigate(`/blogs/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="heading-main">
        <h1>Edit Blog</h1>
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
        <div className="form-btn-input">
          <button type="submit">Submit</button>
        </div>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  );
};

export default EditBlog;
