import { create } from 'zustand';

import { PostData } from '@/services/PostService';

interface InstallationState {
  posts: PostData[];
  setPosts: (value: PostData[]) => void;
  addPost: (value: PostData) => void;
}

const useInstallationsStore = create<InstallationState>()((set) => ({
  posts: [],
  setPosts: (value) => set({ posts: value }),
  addPost: (value) => set((state) => ({ posts: [value, ...state.posts] })),
}));

export default useInstallationsStore;
