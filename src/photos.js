// ============================================================
//  📸 ADD YOUR PHOTOS HERE — super easy!
//
//  Just follow this pattern for each photo:
//  {
//    id: 1,                         ← unique number (1, 2, 3...)
//    file: "1.png",                 ← exact filename (must be in /public/photos/)
//    title: "My Photo Title",       ← name shown on the card
//    category: "Nature",            ← group/tag (use any word you like)
//    date: "2024-06-15",            ← date taken (optional)
//    description: "Short note",     ← optional description
//  },
//
//  STEPS:
//  1. Copy your photo into the  public/photos/  folder
//  2. Add a new entry below with the correct filename
//  3. Save this file — gallery updates instantly!
// ============================================================

const photos = [
  // --- SAMPLE PHOTOS (delete these and add your own) ---
  {
    id: 1,
    file: "1.png",
    title: "Photo 1",
    category: "Memories",
    date: "2024-01-10",
    description: "My first photo",
  },
  {
    id: 2,
    file: "2.png",
    title: "Photo 2",
    category: "Travel",
    date: "2024-02-14",
    description: "A travel memory",
  },
  {
    id: 3,
    file: "3.png",
    title: "Photo 3",
    category: "Family",
    date: "2024-03-20",
    description: "Family moment",
  },
  {
    id: 4,
    file: "4.png",
    title: "Photo 4",
    category: "Nature",
    date: "2024-04-05",
    description: "Beautiful nature",
  },
  {
    id: 5,
    file: "5.png",
    title: "Photo 5",
    category: "Memories",
    date: "2024-05-12",
    description: "Special memory",
  },
];

export default photos;
