export const addFavorite = (id: number): void => {
  const favorites = getFavorites();
  if (favorites.includes(id)) return;
  localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
};

export const removeFavorite = (id: number): void => {
  const favorites = getFavorites();
  localStorage.setItem(
    'favorites',
    JSON.stringify(favorites.filter((fav: number) => fav !== id))
  );
};

export const getFavorites = (): number[] => {
  if(typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export const isFavorite = (id: number): boolean => {
  return getFavorites().includes(id);
};
