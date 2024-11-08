import { create } from 'zustand';
import { Song, Playlist } from '../types';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  volume: number;
  playlists: Playlist[];
  likedSongs: Song[];
  setCurrentSong: (song: Song) => void;
  setIsPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: number) => void;
  togglePlay: () => void;
  nextSong: () => void;
  previousSong: () => void;
  createPlaylist: (playlist: Playlist) => void;
  toggleLikeSong: (song: Song) => void;
}

const mockPlaylists: Playlist[] = [
  {
    id: 1,
    title: "Chill Vibes",
    description: "Perfect for relaxing",
    cover: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=300&h=300&fit=crop",
    songs: []
  },
  {
    id: 2,
    title: "Workout Mix",
    description: "High energy tracks",
    cover: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=300&fit=crop",
    songs: []
  }
];

const mockSongs: Song[] = [
  {
    id: 1,
    title: "Summer Breeze",
    artist: "Chill Wave",
    duration: "3:45",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Midnight Drive",
    artist: "Night Riders",
    duration: "4:20",
    cover: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=300&h=300&fit=crop"
  }
];

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue: mockSongs,
  volume: 0.8,
  playlists: mockPlaylists,
  likedSongs: [],
  
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (volume) => set({ volume }),
  
  addToQueue: (song) => set((state) => ({ queue: [...state.queue, song] })),
  removeFromQueue: (songId) => set((state) => ({
    queue: state.queue.filter(song => song.id !== songId)
  })),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  nextSong: () => {
    const { currentSong, queue } = get();
    if (!currentSong || queue.length === 0) return;
    
    const currentIndex = queue.findIndex(song => song.id === currentSong.id);
    if (currentIndex < queue.length - 1) {
      set({ currentSong: queue[currentIndex + 1] });
    }
  },
  
  previousSong: () => {
    const { currentSong, queue } = get();
    if (!currentSong || queue.length === 0) return;
    
    const currentIndex = queue.findIndex(song => song.id === currentSong.id);
    if (currentIndex > 0) {
      set({ currentSong: queue[currentIndex - 1] });
    }
  },

  createPlaylist: (playlist) => set((state) => ({
    playlists: [...state.playlists, playlist]
  })),

  toggleLikeSong: (song) => set((state) => {
    const isLiked = state.likedSongs.some(s => s.id === song.id);
    return {
      likedSongs: isLiked
        ? state.likedSongs.filter(s => s.id !== song.id)
        : [...state.likedSongs, song]
    };
  })
}));