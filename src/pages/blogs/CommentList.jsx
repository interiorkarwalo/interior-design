import instance from '../../utils/api';

const CommentList = ({ comments, token }) => {
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
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(data);
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
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>User Comments</h2>

      <ul>
        {verifiedComment.map((comment) => {
          return (
            <li>
              {comment.comment} || user: {comment.name}
            </li>
          );
        })}
      </ul>
      <div style={{ height: '100px' }} />
      <hr />
      <hr />

      {token && (
        <ul>
          {unVerifiedComment.map((comment) => {
            return (
              <li>
                <p>
                  {comment.comment} || user: {comment.name}
                </p>
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
