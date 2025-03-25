import { create } from 'zustand'
import { getAccessTokenFromLS } from '@/utils/auth'
interface AppStoreState {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const useAppStore = create<AppStoreState>((set) => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}))

export default useAppStore
