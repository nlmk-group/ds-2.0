export declare const useFavorites: () => {
    favorites: string[];
    addToFavorites: (id: string) => void;
    removeFromFavorites: (id: string, childrenIds: string[]) => void;
    handleFavorites: (id: string, childrenIds: string[]) => void;
    checkIsFavorite: (id: string) => boolean;
    checkChildIsFavorite: (id: string) => boolean;
};
//# sourceMappingURL=useFavorites.d.ts.map