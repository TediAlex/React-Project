import './Comments.css';
import { CommentItem } from './CommentItem';
import { useEffect, useState } from 'react';
import * as  commentsService from '../../services/commentsServices'
import {Pagination} from '../pagination/Pagination'
export const CommentsList = ({
    productId, 
}) => {
     const [comments, setComments] = useState([])
     const [commentsPerPage] = useState(3);
     const [currentPage, setCurrentPage] = useState(1);
   
     const indexOfLastPost = currentPage * commentsPerPage;
     const indexOfFirstPost = indexOfLastPost - commentsPerPage;
     const currentComments = comments.slice(indexOfFirstPost, indexOfLastPost);
   
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    commentsService.gettAllForProduct(productId)
    .then((result) => {
        setComments(result)
    });
},[productId])

  return (
    <>
    <div className="comments-list container"> 
      <div className="row card ">
        {/* <div> */}
          
            {/* <div className="card-body"> */}
            {comments &&
                         currentComments.map((x) => (
                            <CommentItem
                              key={x._id}
                              comment={x}
                            //   onCommentLike={commentLikeHandler}
                            //   onCommentDislike={commentDislikeHandler}
                            //   onCommentDelete={commentDeleteHandler}
                            />
                          ))
            }
            {/* </div> */}
          {/* </div> */}
          {/* <div className="col-md-6"> hshshs</div> */}
        {/* </div> */}
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
