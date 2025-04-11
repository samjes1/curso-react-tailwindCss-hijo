import { MyRoutes } from './routers/routes'
import { useThemeStore } from './store/useThemeStore'


function App() {
  const {theme} = useThemeStore()
  document.documentElement.classList.toggle("dark", theme==="dark")
  return (
  <MyRoutes/>
  )
}

export default App
