const TOTAL_VIDEOS = 1000;

const videos = Array.from({ length: TOTAL_VIDEOS }, (_, i) => {
  const id = i + 1;

  return {
    id: `v${id}`, // important: avoid conflict with photo ids
    file: `${id}.mp4`,
    type: "video",
    title: `Video ${id}`,
    category: "video",
  };
});

export default videos;
