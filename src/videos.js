const TOTAL_VIDEOS = 1000;

const videos = Array.from({ length: TOTAL_VIDEOS }, (_, i) => {
  const id = i + 1;

  return {
    id,
    file: `${id}.mp4`,
    title: `Video ${id}`,
    category: id % 2 === 0 ? "Clips" : "Moments",
    date: "",
    description: "",
  };
});

export default videos;