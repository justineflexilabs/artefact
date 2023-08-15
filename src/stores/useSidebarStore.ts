import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';

interface SidebarViewState {
  isCollapsed: boolean;
  setIsCollapsed: () => void;
}

const useSidebarStore = create<SidebarViewState>()(
  persist(
    (set) => ({
      isCollapsed: true,
      setIsCollapsed: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    { name: 'sidebar', storage: createJSONStorage(() => localStorage) }
  )
);

export default useSidebarStore;
