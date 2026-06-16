import React from "react";

export default function Header({ total, filtered }) {
  return (
    <header className="relative border-b border-white/10">
      {/* Gold accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Title */}
        <div className="text-center md:text-left">
          <p className="text-gold text-xs font-body tracking-[0.3em] uppercase mb-1">Personal Archive</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-soft-white">
            My Gallery
          </h1>
        </div>

        {/* Stats */}
        <div className="flex gap-6">
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-gold">{total}</p>
            <p className="text-white/50 text-xs tracking-widest uppercase">Total Photos</p>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-gold-light">{filtered}</p>
            <p className="text-white/50 text-xs tracking-widest uppercase">Showing</p>
          </div>
        </div>
      </div>
    </header>
  );
}
