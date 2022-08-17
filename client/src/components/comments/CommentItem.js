import moment from 'moment';
import * as commentsService from '../../services/commentsServices'
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
export const CommentItem = ({ comment }) => {
  const { user } = useContext(UserContext);
  const formatCreateDate = moment(comment._createdOn).format(
    'dddd, MMMM DD, YYYY'
  );
  const formatCreateHours = moment(comment._createdOn).format('hh:mm');
  const isAuthorOfComment = comment._ownerId === user._id;
  const [isActive, setActive] = useState(false);
  const [editComment, setEditComment] = useState(comment);
const onChangeEditComment =(e) => {
  setEditComment((state) =>({
    ...state,
    [e.target.name]: e.target.value,
  }))
}
  const editCommentHandler = (e) => {
    setActive(!isActive);
  };
  const closeHandle =() => {
    setActive(!isActive);
  }
  const submitNewComment =(e) => {
    e.preventDefault();
    commentsService.editComment(editComment._id, user.accessToken, editComment)
    .then((result) => {
      setEditComment(result)
      setActive(!isActive);
    });
  }
  const [errors, setErrors] = useState({});
  const requiredField = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: editComment[e.target.name].length < 6,
    }));
  };
  const isFormValid =  !Object.values(errors).some((x) => x);
  return (
    <div className="card-body">
      <p>{editComment.content}</p>
      <div className="author-info">
        {/* <div className="d-flex flex-row align-items-center"> */}
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt="avatar"
        />
        <span>{comment.user}</span>
        <p>
          <b className="mb-1">posted:</b>
          <span>{formatCreateDate}</span>
          <span>{formatCreateHours}</span>
        </p>
        {/* </div> */}
        {/* <div className="d-flex flex-row align-items-center">
          <i
            className="fa fa-thumbs-o-up mx-2 fa-xs text-black i-btn"
            title="like comment"
            aria-hidden="true"
          ></i>
          <span className="sr-only">like comment</span>
        </div> */}
      </div>
      {isAuthorOfComment && (
        <>
        <button
          className="btn btn-primary"
          type="button"
          onClick={editCommentHandler}
          disabled={!isFormValid}
        >
          Edit Comment
        </button>
        <div
        className={
          isActive
            ? 'edit-commen-section overlay active'
            : 'edit-commen-section overlay'
        }
      >
        <div className="background-section" onClick={closeHandle}></div>
        <div className="card-body p-4">
          <form onSubmit={submitNewComment}>
            <h5 className="label">Edit comment</h5>
            <p className="form-outline mb-4">
              <textarea
                type="text"
                id="edit-comment"
                className="form-control"
                rows="3"
                value={editComment.content}
                onChange={onChangeEditComment}
                onBlur={(e) => requiredField(e)}
                
                name="content"
              ></textarea>
            </p>
            {errors.content && (
              <span className="mdl-textfield__error">
                Comment should be at least 6 characters long!
              </span>
            )}
            <button type="submit" className="btn btn-primary btn-sm">
              Submit comment
            </button>
          </form>
        </div>
      </div>
      </>
      )}
      

      {/* <p className="small mb-0 pt-2 text-muted small">
        <b>Likes:</b> 0
      </p> */}
    </div>
  );
};
