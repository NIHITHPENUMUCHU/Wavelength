import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import LikedSongs from './pages/LikedSongs';
import { usePlayerStore } from './store/usePlayerStore';

function App() {
  const { currentSong, isPlaying, setIsPlaying } = usePlayerStore();

  return (
    <Router>
      <div className="flex h-screen bg-zinc-900 text-white">
        <Sidebar />
        
        <main className="flex-1 overflow-auto pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/liked" element={<LikedSongs />} />
          </Routes>
        </main>

        {currentSong && (
          <MusicPlayer 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
          />
        )}
      </div>
    </Router>
  );
}

export default App;