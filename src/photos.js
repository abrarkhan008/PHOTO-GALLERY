const TOTAL_PHOTOS = 1000;

const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => {
  const id = i + 1;

  return {
    id,
    file: `${id}.png`,
    title: `Photo ${id}`,
    category: "Memories",
  };
});

export default photos;
