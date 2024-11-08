import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="Search for songs, artists, or playlists"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-800 rounded-full text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Hip-Hop', 'Rock', 'Electronic', 'Jazz', 'Classical', 'Pop', 'R&B', 'Metal'].map((genre) => (
                <div
                  key={genre}
                  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
                  style={{
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 40%)`
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition" />
                  <span className="absolute bottom-4 left-4 text-lg font-bold">{genre}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Search;