import { create } from 'zustand';

export const useDarkModeStore = create((set) => {
  return {
    darkMode: false,
    toggleDarkMode: () => set((store) => ({ darkMode: !store.darkMode })),
  };
});
