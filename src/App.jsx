import React, { useState, useMemo } from "react";
import photos from "./photos";
import videos from "./videos";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PhotoCard from "./components/PhotoCard";
import Lightbox from "./components/Lightbox";

export default function App() {
  const media = [...photos, ...videos];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);

  // All unique categories
  const categories = useMemo(
    () => [...new Set(media.map((p) => p.category))].sort(),
    [],
  );

  // Filtered photos
  const filtered = useMemo(() => {
    return media.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.date && p.date.includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        p.file.toLowerCase().includes(q);
      const matchCat = !category || p.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  const selectedIndex = selected
    ? filtered.findIndex((p) => p.id === selected.id)
    : -1;

  const handleNext = () => {
    if (selectedIndex < filtered.length - 1)
      setSelected(filtered[selectedIndex + 1]);
  };
  const handlePrev = () => {
    if (selectedIndex > 0) setSelected(filtered[selectedIndex - 1]);
  };

  return (
    <div className="min-h-screen bg-ink font-body">
      <Header total={photos.length} filtered={filtered.length} />
      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        view={view}
        setView={setView}
      />

      {/* Gallery grid */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-6xl mb-4">🔍</p>
            <p className="font-display text-2xl text-white/40">
              No photos found
            </p>
            <p className="text-white/25 text-sm mt-2">
              Try a different search or category
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
              }}
              className="mt-6 text-gold border border-gold/30 px-5 py-2 rounded-xl text-sm hover:bg-gold/10 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            className={
              view === "masonry"
                ? "columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
                : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            }
          >
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className={view === "masonry" ? "break-inside-avoid mb-4" : ""}
              >
                <PhotoCard photo={photo} onClick={setSelected} />
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center border-t border-white/5 pt-8">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            My Photo Gallery &nbsp;·&nbsp; {photos.length} photos archived
          </p>
        </div>
      </main>

      {/* Lightbox */}
      {selected && (
        <Lightbox
          photo={selected}
          photos={filtered}
          onClose={() => setSelected(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
