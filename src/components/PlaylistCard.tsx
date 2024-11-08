import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Playlist } from '../types';
import { usePlayerStore } from '../store/usePlayerStore';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const navigate = useNavigate();
  const { setCurrentSong, queue } = usePlayerStore();

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (queue.length > 0) {
      setCurrentSong(queue[0]);
    }
  };

  return (
    <div 
      className="bg-zinc-800/50 p-4 rounded-xl hover:bg-zinc-800 transition group cursor-pointer"
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <div className="relative">
        <img 
          src={playlist.cover}
          alt={playlist.title}
          className="w-full aspect-square object-cover rounded-lg mb-4"
        />
        <button 
          className="absolute bottom-4 right-4 w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition transform group-hover:translate-y-0 translate-y-2"
          onClick={handlePlay}
        >
          <Play size={20} fill="white" />
        </button>
      </div>
      <h3 className="font-semibold mb-1">{playlist.title}</h3>
      <p className="text-sm text-zinc-400">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;