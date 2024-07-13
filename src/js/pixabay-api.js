

export const searchParams = new URLSearchParams({
  key: '44778676-049b64250b69e7d3e774d3724',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: "true",
});

export function getImg(searchValue) {
  return fetch(`https://pixabay.com/api/?q=${searchValue}&${searchParams}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
}
