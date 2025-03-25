import { create } from 'zustand'
import { getAccessTokenFromLS } from '@/utils/auth'
interface IAppStore {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const useAppStore = create<IAppStore>((set) => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}))

export default useAppStore
