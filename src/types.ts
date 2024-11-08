export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  cover: string;
  songs: Song[];
}

export interface Artist {
  id: number;
  name: string;
  image: string;
  genres: string[];
}