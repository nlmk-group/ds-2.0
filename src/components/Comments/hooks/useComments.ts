import { useState, useCallback } from 'react';

export const useComments = () => {
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [replyingToCommentId, setReplyingToCommentId] = useState<string | null>(
    null
  );
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(
    new Set()
  );

  const toggleEditComment = useCallback((commentId: string) => {
    setEditingCommentId(prev => {
      return prev !== commentId ? commentId : null
    });
  }, []);

  const replyToComment = useCallback((commentId: string) => {
    setReplyingToCommentId(commentId);
  }, []);

  const cancelEdit = useCallback(
    (commentId: string) => {
      if (editingCommentId === commentId) {
        setEditingCommentId(null);
      }
      if (replyingToCommentId === commentId) {
        setReplyingToCommentId(null);
      }
    },
    [editingCommentId, replyingToCommentId]
  );

  const toggleReplies = useCallback((commentId: string) => {
    setExpandedReplies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  }, []);

  return {
    editingCommentId,
    replyingToCommentId,
    expandedReplies,
    toggleEditComment,
    replyToComment,
    cancelEdit,
    toggleReplies
  };
};
