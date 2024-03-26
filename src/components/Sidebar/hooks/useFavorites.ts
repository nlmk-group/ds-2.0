import { useEffect, useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => JSON.parse(localStorage.getItem('favorites') ?? '[]'));

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (id: string) => {
    setFavorites(prev => [...prev, id]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav !== id));
  };

  const checkIsFavorite = (id: string) => favorites.includes(id);

  const checkChildIsFavorite = (id: string) => favorites.some(fav => fav.includes(id));

  const handleFavorites = (id: string) => {
    checkIsFavorite(id) ? removeFromFavorites(id) : addToFavorites(id);
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
