import { create } from 'zustand';

interface SidebarViewState {
  isCollapsed: boolean;
  activeIndex: number;
  setIsCollapsed: () => void;
  setActiveIndex: (value: number) => void;
}

const useSidebarStore = create<SidebarViewState>()((set) => ({
  isCollapsed: true,
  activeIndex: 0,
  setIsCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setActiveIndex: (value: number) => set(() => ({ activeIndex: value })),
}));

export default useSidebarStore;
