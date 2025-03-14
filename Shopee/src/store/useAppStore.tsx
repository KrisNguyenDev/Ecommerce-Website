import { clearAccessTokenFromLS, setAccessTokenToLS } from '@/utils/auth'
import { create } from 'zustand'

interface AppStoreState {
  accessToken: string
  setAccessToken: (value: string) => void
  clearAccessToken: () => void
}

const useAppStore = create<AppStoreState>((set) => ({
  accessToken: '',
  setAccessToken: (value) => {
    set({ accessToken: value })
    setAccessTokenToLS(value)
  },
  clearAccessToken: () => {
    set({ accessToken: '' })
    clearAccessTokenFromLS()
  },
}))

export default useAppStore
