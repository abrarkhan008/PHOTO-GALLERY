import React, { useEffect, useCallback } from "react";

export default function Lightbox({ photo, photos, onClose, onNext, onPrev }) {
  const src = `${process.env.PUBLIC_URL}/photos/${photo.file}`;
  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = photo.file;
    link.click();
  };

  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex flex-col animate-fadeIn"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-gold text-xs tracking-widest uppercase font-semibold">{photo.category}</p>
          <h2 className="font-display text-xl text-soft-white font-semibold mt-0.5">{photo.title}</h2>
          {photo.date && (
            <p className="text-white/40 text-xs mt-0.5">
              {new Date(photo.date).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/30 text-sm">{currentIndex + 1} / {photos.length}</span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-semibold text-sm px-4 py-2 rounded-xl transition-colors"
          >
            ⬇ Download
          </button>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center relative px-16 py-8" onClick={onClose}>
        {/* Prev button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-gold/80 text-white rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 z-10"
        >‹</button>

        {/* Main image */}
        <img
          src={src}
          alt={photo.title}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-gold/80 text-white rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 z-10"
        >›</button>
      </div>

      {/* Description */}
      {photo.description && (
        <div className="text-center pb-4 text-white/40 text-sm px-6" onClick={(e) => e.stopPropagation()}>
          {photo.description}
        </div>
      )}

      {/* Keyboard hint */}
      <div className="text-center pb-4 text-white/20 text-xs" onClick={(e) => e.stopPropagation()}>
        ← → arrow keys to navigate &nbsp;·&nbsp; ESC to close
      </div>
    </div>
  );
}
