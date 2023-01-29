import React,{useState} from "react";
import ReplyModal from "./replyModal";
const ReplyComments = ({ data, comment,parentComment }: { data: any; comment: any,parentComment:any}) => {
  const replies = data.comments.filter(
    (el: any) => el.commentParentId == comment.commentId
  );
  console.log(parentComment);

  const [showReplyModal,setShowReplyModal]=useState(false)

const changeShowReplyState=(state:boolean)=>{
  setShowReplyModal(state)
}

  return (
    <>
         <ReplyModal
        data={data}
        parentComment={comment}
        showReplyModal={showReplyModal}
        changeShowReplyState={changeShowReplyState}
      />
      <div className="space-y-4">
        
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img
              className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
              src="/assets/imgs/placeholders/avatar-6.png"
              alt=""
            />
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
         
            <strong>{comment.writerName} </strong>
            
            <span className="text-xs text-gray-400"></span>
            <p className="text-xs sm:text-sm"><span> @{parentComment.writerName} </span> {comment.text}</p>
            <button
              className="custom-button w-fit mt-4 px-3  text-xs"
              onClick={() => changeShowReplyState(true)}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      {replies != undefined &&
        replies.map((el: any) => {
          return <ReplyComments parentComment={comment}  key={el.commentId} data={data} comment={el} />;
        })}
    </>
  );
};
export default ReplyComments;
