import { create } from 'zustand';

const useAuthStore = create((set) => ({

  user: null, // Starts as null (not logged in)

  // Action: Save the user data (email, password, etc.)
  login: (userData) => set({ user: userData }),

  // Action: Clear the user data
  logout: () => set({ user: null }),

  setSubject: (subject)=> set({Subject:subject}),

  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),

  
}));

export default useAuthStore;