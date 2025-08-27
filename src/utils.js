export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};
// utils.js
export function getVideoUrl(path) {
  return new URL(`/assets/${path}`, import.meta.url).href;
}
