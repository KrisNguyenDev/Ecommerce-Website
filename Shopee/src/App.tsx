import FloatingButton from './components/ui/floatingButton'
import Route from './Route'

function App() {
  const routeElements = Route()

  return (
    <div>
      {routeElements}
      <FloatingButton />
    </div>
  )
}

export default App
