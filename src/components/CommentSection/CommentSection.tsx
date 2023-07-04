import { useAppStore } from "../../stores/appStore";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export type CommentSectionProps = {
  filmId: string;
};

const CommentSection = ({ filmId }: CommentSectionProps) => {
  const comment = useAppStore(s => s.comment);
  const comments = useAppStore(s => s.comments[filmId]);
  const actOnComment = useAppStore(s => s.actOnComment);

  const handleSubmitComment = (data, reset) => {
    reset();
    comment(filmId, data);
  };

  return (
    <>
      <CommentForm onSubmit={handleSubmitComment} />

      <div className="flex flex-col gap-6 mt-8 w-full">
        {comments?.map((comment, i) => (
          <Comment
            key={i}
            {...comment}
            onLike={() => actOnComment(filmId, comment.id, "like")}
            onDislike={() => actOnComment(filmId, comment.id, "dislike")}
          />
        ))}
      </div>
    </>
  );
};

export default CommentSection;
