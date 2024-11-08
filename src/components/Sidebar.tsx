import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import CreatePlaylistModal from './CreatePlaylistModal';
import { usePlayerStore } from '../store/usePlayerStore';

const Sidebar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const likedSongs = usePlayerStore(state => state.likedSongs);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="w-64 bg-black p-6 flex flex-col">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">W</span>
          </div>
          <h1 className="text-xl font-bold">Wavelength</h1>
        </div>

        <nav className="space-y-6">
          <div className="space-y-3">
            <Link
              to="/"
              className={`flex items-center space-x-3 ${
                isActive('/') ? 'text-white' : 'text-zinc-400 hover:text-white'
              } transition`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/search"
              className={`flex items-center space-x-3 ${
                isActive('/search') ? 'text-white' : 'text-zinc-400 hover:text-white'
              } transition`}
            >
              <Search size={20} />
              <span>Search</span>
            </Link>
            <Link
              to="/library"
              className={`flex items-center space-x-3 ${
                isActive('/library') ? 'text-white' : 'text-zinc-400 hover:text-white'
              } transition`}
            >
              <Library size={20} />
              <span>Your Library</span>
            </Link>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-3 text-zinc-400 hover:text-white transition w-full text-left"
            >
              <PlusSquare size={20} />
              <span>Create Playlist</span>
            </button>
            <Link
              to="/liked"
              className={`flex items-center space-x-3 ${
                isActive('/liked') ? 'text-white' : 'text-zinc-400 hover:text-white'
              } transition group`}
            >
              <div className="relative">
                <Heart size={20} className="group-hover:hidden" />
                <Heart size={20} fill="white" className="hidden group-hover:block" />
                {likedSongs.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-violet-500 rounded-full text-xs flex items-center justify-center">
                    {likedSongs.length}
                  </span>
                )}
              </div>
              <span>Liked Songs</span>
            </Link>
          </div>
        </nav>

        <div className="mt-auto">
          <div className="py-4 border-t border-zinc-800">
            <div className="text-xs text-zinc-400 hover:text-white transition cursor-pointer">
              Privacy Policy • Terms of Service
            </div>
          </div>
        </div>
      </div>

      <CreatePlaylistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Sidebar;