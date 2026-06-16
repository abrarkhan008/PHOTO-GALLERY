import React from "react";

export default function SearchBar({ search, setSearch, category, setCategory, categories, view, setView }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center">
      {/* Search input */}
      <div className="relative flex-1 w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-lg">🔍</span>
        <input
          type="text"
          placeholder="Search photos by name, category, date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-ash/80 border border-white/10 text-soft-white placeholder-white/30 rounded-xl pl-11 pr-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-gold transition-colors text-lg"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-ash border border-white/10 text-soft-white rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors cursor-pointer min-w-[160px]"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* View toggle */}
      <div className="flex gap-1 bg-ash border border-white/10 rounded-xl p-1">
        <button
          onClick={() => setView("grid")}
          className={`px-3 py-2 rounded-lg text-sm transition-all ${view === "grid" ? "bg-gold text-ink font-semibold" : "text-white/50 hover:text-white"}`}
          title="Grid view"
        >⊞ Grid</button>
        <button
          onClick={() => setView("masonry")}
          className={`px-3 py-2 rounded-lg text-sm transition-all ${view === "masonry" ? "bg-gold text-ink font-semibold" : "text-white/50 hover:text-white"}`}
          title="Masonry view"
        >⋮⋮ Masonry</button>
      </div>
    </div>
  );
}
