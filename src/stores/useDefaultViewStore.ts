import { create } from 'zustand';

interface IDefaultViewState {
  defaultView: string;
  actions: {
    setDefaultView: (value: string) => void;
  };
}

const useDefaultViewStore = create<IDefaultViewState>()((set) => ({
  defaultView: 'Gallery',
  actions: {
    setDefaultView: (value) => set(() => ({ defaultView: value })),
  },
}));

export const useDefaultView = () =>
  useDefaultViewStore((state) => state.defaultView);

export const useDefaultViewActions = () =>
  useDefaultViewStore((state) => state.actions);
