import React from 'react';
import { usePlayerStore } from '../store/usePlayerStore';
import PlaylistCard from '../components/PlaylistCard';
import { PlusCircle } from 'lucide-react';

const Library = () => {
  const playlists = usePlayerStore(state => state.playlists);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Library</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-violet-500 rounded-full hover:bg-violet-600 transition">
          <PlusCircle size={20} />
          <span>Create Playlist</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Library;