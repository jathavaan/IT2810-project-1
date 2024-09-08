export const setFavoriteCountry = (
  countryCode: string,
  isFavorite: boolean,
) => {
  localStorage.setItem(countryCode, String(isFavorite));
};
