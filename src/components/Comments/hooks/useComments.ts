import { useCallback, useEffect, useState } from 'react';

/**
 * Хук для управления состоянием комментариев в интерфейсе.
 *
 * Отвечает за:
 * - хранение id комментария, который сейчас редактируется
 * - хранение id комментария, для которого сейчас открыт ответ
 * - хранение списка комментариев с раскрытыми ответами
 * - переключение режима редактирования комментария
 * - открытие режима ответа на комментарий
 * - отмену редактирования или ответа для конкретного комментария
 * - раскрытие и сворачивание ответов у комментария
 * - сброс состояний редактирования, ответа и раскрытых веток при начале загрузки
 *
 * @param {boolean} isLoading Флаг загрузки. При значении true хук сбрасывает состояние редактирования, ответа и раскрытых ответов.
 *
 * @returns {{
 *   editingCommentId: string | null;
 *   replyingToCommentId: string | null;
 *   expandedReplies: Set<string>;
 *   toggleEditComment: (commentId: string) => void;
 *   replyToComment: (commentId: string) => void;
 *   cancelEdit: (commentId: string) => void;
 *   toggleReplies: (commentId: string) => void;
 * }}
 */

export const useComments = (isLoading: boolean) => {
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [replyingToCommentId, setReplyingToCommentId] = useState<string | null>(null);
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    setEditingCommentId(null);
    setReplyingToCommentId(null);
    setExpandedReplies(new Set());
  }, [isLoading]);

  const toggleEditComment = useCallback((commentId: string) => {
    setEditingCommentId(prev => (prev !== commentId ? commentId : null));
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
