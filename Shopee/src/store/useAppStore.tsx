import { create } from 'zustand'
import { getAccessTokenFromLS, getUserFromLS } from '@/utils/auth'
import { User } from '@/types/user.type'
interface IAppStore {
  isAuthenticated: boolean
  user?: User
  setIsAuthenticated: (value: boolean) => void
  setUser: (value?: User) => void
}

const useAppStore = create<IAppStore>((set) => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  user: getUserFromLS(),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (value) => set({ user: value }),
}))

export default useAppStore
