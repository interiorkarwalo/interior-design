import instance from "../../utils/api";
import "./commentlist.css";

const CommentList = ({ comments, token, fetchCommentData }) => {
  console.log(comments);

  const verifiedComment = comments.filter((c) => c.isVerified === true);
  const unVerifiedComment = comments.filter((c) => c.isVerified === false);
  console.log(verifiedComment);
  const handleApprove = async (id) => {
    try {
      const { data } = await instance.put(
        `user/${id}`,
        {
          isVerified: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      await fetchCommentData();
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id) => {
    try {
      const { data } = await instance.delete(
        `user/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      await fetchCommentData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-comment-form">
      <h2>{verifiedComment.length} Comments</h2>

      <ul>
        {verifiedComment.map((comment) => {
          return (
            <>
              <div className="user-comment-show">
                <img src="/avatar-default-svgrepo-com.svg" alt="User" />
                <div className="user-comment-show-horizontal">
                  <h2>{comment.name}</h2>
                  <li>{comment.comment}</li>
                </div>
              </div>
              <hr
                style={{
                  width: "100%",
                  backgroundColor: "red",
                  border: "0.5px solid lightgray",
                  maxWidth: "1000px",
                }}
              />
            </>
          );
        })}
      </ul>
      <div style={{ height: "100px" }} />
      {/* <hr />
      <hr /> */}

      {token && (
        <ul>
          {unVerifiedComment.map((comment) => {
            return (
              <li>
                <h2>{comment.name}</h2>
                <img src="/avatar-default-svgrepo-com.svg" alt="User" />
                <p>{comment.comment} </p>
                <div>
                  <button
                    className="btn"
                    onClick={() => handleReject(comment._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleApprove(comment._id)}
                  >
                    Approve
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
