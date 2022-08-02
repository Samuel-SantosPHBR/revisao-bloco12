const FAVORITE_CHARACTER = 'favotite_characters';

const readFavoriteCharacter = () => JSON.parse(localStorage.getItem(FAVORITE_CHARACTER));

const saveFavoriteCharacter = (favoriteCharacter) => localStorage
  .setItem(FAVORITE_CHARACTER, JSON.stringify(favoriteCharacter));

export const addFavorites = (character) => {
    const favorites = readFavoriteCharacter() || [];
    saveFavoriteCharacter([...favorites, character])
}

export const getFavorites = () => {
    return readFavoriteCharacter() || [];
}

export const removeFavorite = (character) => {
    const favorites = readFavoriteCharacter() || [];
    saveFavoriteCharacter(favorites.filter((s) => s.id !== character.id));
}
