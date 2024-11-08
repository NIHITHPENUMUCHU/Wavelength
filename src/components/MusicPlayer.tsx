import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Shuffle, Repeat, Heart } from 'lucide-react';
import { Song } from '../types';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentSong: Song;
}

const MusicPlayer = ({ isPlaying, setIsPlaying, currentSong }: MusicPlayerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-zinc-900 p-4 border-t border-zinc-800">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-14 h-14 rounded-md"
          />
          <div>
            <h4 className="font-medium">{currentSong.title}</h4>
            <p className="text-sm text-zinc-400">{currentSong.artist}</p>
          </div>
          <button className="hover:text-violet-400 transition">
            <Heart size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center max-w-xl w-full">
          <div className="flex items-center space-x-6">
            <button className="hover:text-violet-400 transition">
              <Shuffle size={20} />
            </button>
            <button className="hover:text-violet-400 transition">
              <SkipBack size={24} />
            </button>
            <button 
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="hover:text-violet-400 transition">
              <SkipForward size={24} />
            </button>
            <button className="hover:text-violet-400 transition">
              <Repeat size={20} />
            </button>
          </div>
          
          <div className="w-full flex items-center space-x-2 mt-2">
            <span className="text-xs text-zinc-400">1:23</span>
            <div className="flex-1 h-1 bg-zinc-600 rounded-full">
              <div className="w-1/3 h-full bg-violet-500 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100 cursor-pointer"></div>
              </div>
            </div>
            <span className="text-xs text-zinc-400">{currentSong.duration}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Volume2 size={20} />
          <div className="w-24 h-1 bg-zinc-600 rounded-full">
            <div className="w-2/3 h-full bg-violet-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;