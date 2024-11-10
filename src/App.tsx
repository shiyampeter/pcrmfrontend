import configureBackend from './common/api/backend'
import { AuthProvider, ThemeProvider } from './common/context'
import ThemeRoutes from './routes/Routes'

// Flaticons
import './../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

// Theme.scss
import './assets/scss/theme.scss'
import { store } from './redux/store'
import { Provider } from 'react-redux'

// configureBackend()

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <AuthProvider>
          <ThemeRoutes />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
