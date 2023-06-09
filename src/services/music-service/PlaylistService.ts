import axios from 'axios';
import { Playlist } from '../../types';

const API_URL = "http://34.91.28.46/api/playlists";

const playlistService = {
  getPlaylists: async (): Promise<Playlist[]> => {
    try {
      const response = await axios.get(API_URL + "/");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  getPlaylistById: async (id: number): Promise<Playlist | null> => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
  createPlaylist: async (playlist: Playlist): Promise<Playlist | null> => {
    try {
      const response = await axios.post(API_URL, playlist);
      return response.data;
    } catch (error) {
      return null;
    }
  },
  updatePlaylist: async (id: number, playlist: Playlist): Promise<Playlist | null> => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, playlist);
      return response.data;
    } catch (error) {
      return null;
    }
  },
  deletePlaylist: async (id: number): Promise<boolean> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
};

export default playlistService;
