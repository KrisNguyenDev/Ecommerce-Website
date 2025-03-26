import FloatingButton from './components/ui/floatingButton'
import Route from './Route'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import Loader from './components/Loader'

function App() {
  const routeElements = Route()
  const fetchingCount = useIsFetching()
  const mutatingCount = useIsMutating()

  return (
    <div>
      {(fetchingCount > 0 || mutatingCount > 0) && <Loader />}
      {routeElements}
      <FloatingButton />
    </div>
  )
}

export default App
