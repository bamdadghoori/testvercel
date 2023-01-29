import React, { useState } from "react";
import ReplyComments from "./replyComments";
import ReplyModal from "./replyModal";
const Comment = ({ data, comment }: { data: any; comment: any }) => {
  const replies = data.comments.filter(
    (el: any) => el.commentParentId == comment.commentId
  );
  console.log(replies);

  const [showReplyModal, setShowReplyModal] = useState(false);

  const changeShowReplyState = (state: boolean) => {
    setShowReplyModal(state);
  };

  return (
    <>
      <ReplyModal
        data={data}
        parentComment={comment}
        showReplyModal={showReplyModal}
        changeShowReplyState={changeShowReplyState}
      />
      <div className="flex mb-4">
        <div className="flex-shrink-0 mr-3">
          <img
            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src="/assets/imgs/placeholders/avatar-2.png"
            alt=""
          />
        </div>
        <div className="flex-1 card border-none px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong>{comment.writerName}</strong>
         
          <p className="text-sm">{comment.text}</p>
          <button
            className="custom-button text-sm px-4 w-fit mt-4"
            onClick={() => changeShowReplyState(true)}
          >
            Reply
          </button>
          {/* <div className="mt-4 flex items-center">
     <div className="flex -space-x-2 mr-2">
       <img
         className="rounded-full w-6 h-6 border border-white"
         src="/assets/imgs/placeholders/avatar-3.png"
         alt=""
       />
       <img
         className="rounded-full w-6 h-6 border border-white"
         src="/assets/imgs/placeholders/avatar-4.png"
         alt=""
       />
     </div>
     <div className="text-sm text-gray-500 font-semibold">
       5 Replies
     </div>
     
   </div> */}
          {replies != undefined &&
            replies.map((el: any) => {
              return (
                <>
                  <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                    Replies
                  </h4>
                  <ReplyComments
                    key={el.commentId}
                    data={data}
                    parentComment={comment}
                    comment={el}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Comment;
