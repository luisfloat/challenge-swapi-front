import { create } from "zustand";
import { persist } from "zustand/middleware";
import { comments } from "./data/comments";
import { IComment } from "../types/IComment";

export type AppState = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  comments: Record<string, IComment[]>;
  comment: (filmId: string, comment: IComment) => void;
  actOnComment: (
    filmId: string,
    commentId: string,
    action: "like" | "dislike"
  ) => void;
};

export const useAppStore = create(
  persist<AppState>(
    (set) => ({
      searchQuery: "",
      setSearchQuery: (searchQuery) => set(() => ({ searchQuery })),
      comments,
      comment: (filmId, data) =>
        set((s) => {
          const newComment = { ...data, id: Date.now(), likes: 0, dislikes: 0 };

          return {
            comments: {
              ...s.comments,
              [filmId]: [
                newComment,
                ...(s.comments[filmId] || []),
              ] as IComment[],
            },
          };
        }),
      actOnComment: (filmId, commentId, action) =>
        set((s) => {
          return {
            comments: {
              ...s.comments,
              [filmId]: s.comments[filmId]?.map((comment) => {
                if (comment.id !== commentId) {
                  return comment;
                }

                const prevAction = comment.actionPerformed;
                const likeIncrement =
                  prevAction === "like" ? -1 : action === "like" ? 1 : 0;
                const dislikeIncrement =
                  prevAction === "dislike" ? -1 : action === "dislike" ? 1 : 0;

                return {
                  ...comment,
                  actionPerformed: action === prevAction ? null : action,
                  likes: comment.likes + likeIncrement,
                  dislikes: comment.dislikes + dislikeIncrement,
                };
              }),
            },
          };
        }),
    }),
    {
      name: "swapi-fe",
    }
  )
);
