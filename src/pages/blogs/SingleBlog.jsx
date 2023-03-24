import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import jwtDecode from 'jwt-decode';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import instance from '../../utils/api';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './single-blog.css';

const SingleBlog = () => {
  const [comments, setComments] = useState([]);
  const [token, setToken] = useState(null);
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    try {
      const hello = jwtDecode(localStorage.getItem('blogToken'));
      setToken(hello);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchData = async () => {
          const { data } = await instance.get(
            `https://api.interiorkarwalo.com/api/v1/user/post/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('blogToken')}`,
              },
            }
          );
          console.log(data);
          setBlog(data.data);
        };
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const fetchCommentData = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.interiorkarwalo.com/api/v1/user/post/${id}/comment`
    );
    console.log(data);
    setComments(data.data);
  }, [id]);

  useEffect(() => {
    fetchCommentData();
  }, [id, fetchCommentData]);

  const handleRemove = async () => {
    if (window.confirm('Do you really want to delete this item permanently?')) {
      try {
        await instance.delete(`post/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('blogToken')}`,
          },
        });
        navigate('/blogs');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (commentData) => {
    try {
      const { data } = await axios.post(
        `https://api.interiorkarwalo.com/api/v1/user/post/${id}`,
        {
          ...commentData,
        }
      );

      await fetchCommentData();
    } catch (error) {
      console.log(error);
    }
  };

  if (blog == null) {
    return <div>no blog found </div>;
  }
  console.log(token);
  return (
    <div className="container">
      <div className="single-blog" style={{ position: 'relative' }}>
        <h4 className="single-blog-h4">{blog.title}</h4>
        <img className="single-blog-img" src={blog.imageUrl} alt={blog.title} />
        {token && (
          <div>
            <button
              className="btn-reject"
              // style={{ position: "absolute", right: 0, top: 0 }}
              onClick={handleRemove}
            >
              Remove
            </button>
            <button
              className="btn-accept"
              // style={{
              //   position: "absolute",
              //   right: 0,
              //   top: "60px",
              //   backgroundColor: "deeppink",
              // }}
            >
              <Link to={`/blogs/${id}/edit`}>Edit Me</Link>
            </button>
          </div>
        )}
        <br />
        {/* <p className="single-blog-p"> */}
        {/* <strong>Author :</strong> {blog.authorDetails.name}{' '} */}
        {/* </p> */}
        {/* <p className="single-blog-p"> */}
        {/* <strong>Email :</strong> {blog.authorDetails.email}{' '} */}
        {/* </p> */}
        {/* <br /> */}
        <p className="single-blog-p">
          <strong className="single-blog-d">
            Description <br />
          </strong>
          {blog.desc}
        </p>
        {/* <Markup content={blog.articleBody}/> */}
        <br />
        <p className="single-blog-t">
          {formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}
        </p>
      </div>
      <div className="comment-container">
        <CommentList
          comments={comments}
          token={token}
          fetchCommentData={fetchCommentData}
        />
        <CommentForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SingleBlog;
