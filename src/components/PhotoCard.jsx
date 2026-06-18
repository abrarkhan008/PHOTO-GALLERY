import React, { useState } from "react";

export default function PhotoCard({ photo, onClick }) {
 const [loaded, setLoaded] = useState(false);
const [error, setError] = useState(false);

const isVideo = photo.type === "video";

const src = isVideo
  ? `${process.env.PUBLIC_URL}/videos/${photo.file}`
  : `${process.env.PUBLIC_URL}/photos/${photo.file}`;

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = src;
    link.download = photo.file || "download";
    link.click();
  };

  return (
    <div
      onClick={() => onClick(photo)}
      className="group relative bg-ash rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10 animate-fadeIn"
    >
      {/* Shimmer loader */}
      {!loaded && !error && (
        <div className="shimmer w-full aspect-square rounded-2xl" />
      )}

      {/* Error state */}
      {error && (
        <div className="w-full aspect-square flex flex-col items-center justify-center bg-ash/50 text-white/30 gap-2">
          <span className="text-4xl">🖼️</span>
          <p className="text-xs text-center px-4">
            File not found <br />
            <span className="text-gold/60">{photo.file}</span>
          </p>
        </div>
      )}

      {/* Media (Image / Video) */}
      {!error &&
        (isVideo ? (
          <video
            src={src}
            className={`w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
            onLoadedData={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
            muted
            playsInline
          />
        ) : (
          <img
            src={src}
            alt={photo.title}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
            className={`w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          />
        ))}

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-ink/70 backdrop-blur-sm text-gold text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gold/20">
          {isVideo ? "Video" : photo.category}
        </span>
      </div>

      {/* Actions */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <button
          onClick={handleDownload}
          className="w-8 h-8 bg-gold text-ink rounded-full flex items-center justify-center text-sm hover:bg-gold-light transition-colors shadow-lg"
          title="Download"
        >
          ⬇
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(photo);
          }}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm hover:bg-white/40 transition-colors"
          title="Open"
        >
          ⛶
        </button>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <p className="font-display font-semibold text-soft-white text-sm truncate">
          {photo.title}
        </p>

        {photo.date && (
          <p className="text-white/50 text-xs mt-0.5">
            {new Date(photo.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
      </div>
    </div>
  );
}
