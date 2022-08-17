// Import Components
import { CommentItem } from './CommentItem';
import { Pagination } from '../pagination/Pagination';
// Import Services
import * as commentsService from '../../services/commentsServices';
//Import Styles
import './Comments.css';
// Import Default
import { useEffect, useState } from 'react';


export const CommentsList = ({ productId, addComments }) => {
  const [comments, setComments] = useState([]);
  const [commentsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * commentsPerPage;
  const indexOfFirstPost = indexOfLastPost - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(comments);
  useEffect(() => {
    commentsService.gettAllForProduct(productId).then((result) => {
      setComments(result);
    });
  }, [productId, addComments]);

  return (
    <>
      <div className="comments-list container">
        <div className="row card ">
          {comments &&
            currentComments.map((x) => (
              <CommentItem productId={productId} key={x._id} comment={x} />
            ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {comments.length > commentsPerPage ? (
            <Pagination
              itemsPerPage={commentsPerPage}
              totalItems={comments.length}
              paginate={paginate}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
