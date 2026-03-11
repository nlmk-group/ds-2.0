import { useCallback, useEffect, useState } from 'react';

/**
 * Хук для управления UI-состоянием дерева комментариев.
 *
 * Хранит:
 * - id комментария, находящегося в режиме редактирования
 * - id комментария, для которого открыта форма ответа
 * - набор id комментариев с раскрытыми ответами
 *
 * Поведение:
 * - при открытии редактирования у комментария закрывает форму ответа этого же комментария
 * - при открытии формы ответа у комментария закрывает режим редактирования этого же комментария
 * - позволяет отменить редактирование или ответ для конкретного комментария
 * - переключает состояние раскрытия ответов у комментария
 * - при `isLoading = true` сбрасывает состояние редактирования, ответа и раскрытых веток
 *
 * @param {boolean} isLoading Флаг загрузки комментариев.
 *
 * @returns {{
 *   editingCommentId: string | null;
 *   replyingToCommentId: string | null;
 *   expandedReplies: Set<string>;
 *   toggleEditComment: (commentId: string) => void;
 *   replyToComment: (commentId: string) => void;
 *   cancelEdit: (commentId: string) => void;
 *   toggleReplies: (commentId: string) => void;
 * }} Объект с текущим состоянием и методами управления комментариями.
 */

export const useComments = (isLoading: boolean) => {
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [replyingToCommentId, setReplyingToCommentId] = useState<string | null>(null);
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isLoading) {
      setEditingCommentId(null);
      setReplyingToCommentId(null);
      setExpandedReplies(new Set());
    }
  }, [isLoading]);

  const toggleEditComment = useCallback((commentId: string) => {
    setEditingCommentId(prev => (prev === commentId ? null : commentId));
    setReplyingToCommentId(prev => (prev === commentId ? null : prev));
  }, []);

  const replyToComment = useCallback((commentId: string) => {
    setReplyingToCommentId(prev => (prev === commentId ? null : commentId));
    setEditingCommentId(prev => (prev === commentId ? null : prev));
  }, []);

  const cancelEdit = useCallback((commentId: string) => {
    setEditingCommentId(prev => (prev === commentId ? null : prev));
    setReplyingToCommentId(prev => (prev === commentId ? null : prev));
  }, []);

  const toggleReplies = useCallback((commentId: string) => {
    setExpandedReplies(prev => {
      const next = new Set(prev);

      if (next.has(commentId)) {
        next.delete(commentId);
      } else {
        next.add(commentId);
      }

      return next;
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
