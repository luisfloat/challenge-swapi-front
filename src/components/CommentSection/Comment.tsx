import thumbsDownImg from "../../assets/icons/thumbs-down.svg";
import thumbsUpImg from "../../assets/icons/thumbs-up.svg";
import userCircleSolidImg from "../../assets/icons/user-circle-solid.svg";
import { IComment } from "../../types/IComment";
import Icon from "../Icon/Icon";

export type CommentProps = IComment & {
  onLike?: () => void;
  onDislike?: () => void;
};

const Comment = ({
  avatarUrl,
  comment,
  likes,
  dislikes,
  actionPerformed,
  onLike,
  onDislike,
}: CommentProps) => {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-[22px]">
        <img
          src={avatarUrl || userCircleSolidImg}
          className="w-[22px] h-[22px]"
        />
      </div>

      <div className="w-full">
        <p className="w-full md:w-[379px] font-roboto text-base text-[#777]">{comment}</p>

        <div className="flex gap-4">
          <button
            className={`flex gap-1 items-center text-[#FF5656] ${actionPerformed === 'dislike' ? 'font-bold' : ''}`}
            onClick={onDislike}
          >
            {dislikes} <Icon src={thumbsDownImg} size="14px" />
          </button>
          <button
            className={`flex gap-1 items-center text-[#00BE3B] ${actionPerformed === 'like' ? 'font-bold' : ''}`}
            onClick={onLike}
          >
            {likes} <Icon src={thumbsUpImg} size="14px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
