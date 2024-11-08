import React from 'react';
import { usePlayerStore } from '../store/usePlayerStore';
import { Heart, Play, Clock, MoreHorizontal } from 'lucide-react';

const LikedSongs = () => {
  const { likedSongs, setCurrentSong } = usePlayerStore();

  return (
    <div>
      <div className="relative h-80 bg-gradient-to-b from-violet-600 to-zinc-900">
        <div className="absolute bottom-8 left-8 flex items-end space-x-6">
          <div className="w-52 h-52 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center">
            <Heart size={64} fill="white" />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">PLAYLIST</h4>
            <h1 className="text-5xl font-bold mb-2">Liked Songs</h1>
            <p className="text-zinc-300">{likedSongs.length} songs</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {likedSongs.length > 0 ? (
          <>
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

              {likedSongs.map((song, index) => (
                <div
                  key={song.id}
                  className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 hover:bg-zinc-800/50 rounded-lg group cursor-pointer"
                  onClick={() => setCurrentSong(song)}
                >
                  <span className="text-zinc-400">{index + 1}</span>
                  <div className="flex items-center space-x-4">
                    <img
                      src={song.cover}
                      alt=""
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <div className="font-medium">{song.title}</div>
                      <div className="text-sm text-zinc-400">{song.artist}</div>
                    </div>
                  </div>
                  <span className="text-zinc-400">Album Name</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-zinc-400">{song.duration}</span>
                    <button className="opacity-0 group-hover:opacity-100 transition">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart size={64} className="mx-auto mb-4 text-zinc-400" />
            <h2 className="text-2xl font-bold mb-2">Songs you like will appear here</h2>
            <p className="text-zinc-400">Save songs by tapping the heart icon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedSongs;