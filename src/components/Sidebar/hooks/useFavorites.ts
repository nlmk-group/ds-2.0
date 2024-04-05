import { useEffect, useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => JSON.parse(localStorage.getItem('favorites') ?? '[]'));

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const removeFromFavorites = (id: string, childrenIds: string[]) => {
    setFavorites(prev => {
      let newFavorites = prev.filter(fav => fav !== id);
      childrenIds.forEach(childId => {
        newFavorites = newFavorites.filter(fav => fav !== childId);
      });
      const parentId = id.slice(0, id.lastIndexOf('-'));
      if (parentId) {
        const anyChildrenInFavorites = newFavorites.filter(childId => childId.includes(parentId)).length >= 2;
        if (!anyChildrenInFavorites) {
          newFavorites = newFavorites.filter(fav => fav !== parentId);
        }
      }
      return newFavorites;
    });
  };

  const checkIsFavorite = (id: string) => favorites.includes(id);

  const checkChildIsFavorite = (id: string) => favorites.some(fav => fav.startsWith(id));

  const handleFavorites = (id: string, childrenIds: string[]) => {
    if (checkIsFavorite(id)) {
      removeFromFavorites(id, childrenIds);
    } else {
      const missingChildrenIds = childrenIds.filter(childId => !checkIsFavorite(childId));
      missingChildrenIds.forEach(childId => addToFavorites(childId));

      const parentId = id.includes('-') ? id.slice(0, id.lastIndexOf('-')) : '';
      if (parentId) {
        const allChildrenInFavorites = childrenIds.every(childId => checkIsFavorite(childId));
        if (allChildrenInFavorites && !checkIsFavorite(parentId)) {
          addToFavorites(parentId);
        }
      }

      if (!checkIsFavorite(id)) {
        addToFavorites(id);
      }
    }
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    handleFavorites,
    checkIsFavorite,
    checkChildIsFavorite
  };
};
