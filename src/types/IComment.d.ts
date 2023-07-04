export type IComment = {
  id: string;
  avatarUrl?: string | null;
  comment: string;
  likes: number;
  dislikes: number;
  actionPerformed?: "like" | "dislike" | null;
};
