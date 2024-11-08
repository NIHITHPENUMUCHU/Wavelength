import React from 'react';
import { usePlayerStore } from '../store/usePlayerStore';
import PlaylistCard from '../components/PlaylistCard';
import { Music2 } from 'lucide-react';

const Home = () => {
  const playlists = usePlayerStore(state => state.playlists);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <div className="flex items-center space-x-4">
          <button className="hover:text-violet-400 transition">
            <Music2 size={24} />
          </button>
          <div className="h-8 w-8 rounded-full bg-violet-500 flex items-center justify-center">
            <span className="font-medium">JD</span>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="bg-zinc-800/50 p-4 rounded-xl hover:bg-zinc-800 transition group cursor-pointer"
            >
              <img 
                src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=300&h=300&fit=crop`}
                alt="Album cover"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-1">Recently Played {item}</h3>
              <p className="text-sm text-zinc-400">Last played 2 hours ago</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;