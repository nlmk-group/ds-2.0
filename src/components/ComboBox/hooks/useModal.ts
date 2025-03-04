import { useCallback, useState } from 'react';

/**
 * Хук для управления состоянием модального окна
 *
 * @returns Объект с состоянием и методами управления модальным окном:
 * - isOpen: текущее состояние модального окна (открыто/закрыто)
 * - openModal: функция для открытия модального окна
 * - closeModal: функция для закрытия модального окна
 *
 * @example
 * ```typescript
 * function MyComponent() {
 *   const { isOpen, openModal, closeModal } = useModal();
 *
 *   return (
 *     <>
 *       <button onClick={openModal}>Открыть</button>
 *       <Modal open={isOpen} onClose={closeModal}>
 *         <div>Содержимое модального окна</div>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    openModal,
    closeModal
  };
};

export type UseModalReturnedType = ReturnType<typeof useModal>;
