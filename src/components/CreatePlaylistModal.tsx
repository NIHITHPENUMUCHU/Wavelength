import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { usePlayerStore } from '../store/usePlayerStore';

interface CreatePlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePlaylistModal = ({ isOpen, onClose }: CreatePlaylistModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const createPlaylist = usePlayerStore(state => state.createPlaylist);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPlaylist({
      id: Date.now(),
      title,
      description,
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
      songs: []
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Create Playlist</h2>
          <button onClick={onClose} className="hover:text-violet-400 transition">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Playlist Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="My Awesome Playlist"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              placeholder="Add an optional description"
              rows={3}
            />
          </div>

          <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center">
            <Upload size={24} className="mx-auto mb-2" />
            <p className="text-sm text-zinc-400">Drag and drop a cover image or click to upload</p>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium hover:text-violet-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-violet-500 text-sm font-medium rounded-full hover:bg-violet-600 transition"
            >
              Create Playlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;