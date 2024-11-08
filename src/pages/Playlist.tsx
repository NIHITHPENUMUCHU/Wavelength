import React from 'react';
import { useParams } from 'react-router-dom';
import { usePlayerStore } from '../store/usePlayerStore';
import { Play, Clock, MoreHorizontal } from 'lucide-react';

const Playlist = () => {
  const { id } = useParams();
  const playlists = usePlayerStore(state => state.playlists);
  const playlist = playlists.find(p => p.id === Number(id));

  if (!playlist) {
    return <div className="p-8">Playlist not found</div>;
  }

  return (
    <div>
      <div className="relative h-80">
        <img
          src={playlist.cover}
          alt={playlist.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-5xl font-bold mb-2">{playlist.title}</h1>
          <p className="text-zinc-300">{playlist.description}</p>
        </div>
      </div>

      <div className="p-8">
        <button className="w-14 h-14 bg-violet-500 rounded-full flex items-center justify-center hover:scale-105 transition mb-8">
          <Play size={24} fill="white" />
        </button>

        <div className="space-y-2">
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 text-sm text-zinc-400 border-b border-zinc-800">
            <span>#</span>
            <span>Title</span>
            <span>Album</span>
            <span><Clock size={16} /></span>
          </div>

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 hover:bg-zinc-800/50 rounded-lg group"
            >
              <span className="text-zinc-400">{item}</span>
              <div className="flex items-center space-x-4">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=50&h=50&fit=crop`}
                  alt=""
                  className="w-10 h-10 rounded"
                />
                <div>
                  <div className="font-medium">Track {item}</div>
                  <div className="text-sm text-zinc-400">Artist Name</div>
                </div>
              </div>
              <span className="text-zinc-400">Album Name</span>
              <div className="flex items-center space-x-4">
                <span className="text-zinc-400">3:45</span>
                <button className="opacity-0 group-hover:opacity-100 transition">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;