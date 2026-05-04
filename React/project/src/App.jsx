import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import EnhancedNavbar from './components/EnhancedNavbar'
import Home from './pages/Home.jsx'
import Form from './pages/form.jsx'
import Products from './mui/Products'
import TodoApp from './pages/TodoApp.jsx'
import NotesApp from './pages/NotesApp.jsx'
import Cart from './pages/Cart.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import Analytics from './pages/Analytics.jsx'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <EnhancedNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/myform' element={<Form />} />
            <Route path='/products' element={<Products />} />
            <Route path='/todos' element={<TodoApp />} />
            <Route path='/notes' element={<NotesApp />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/analytics' element={<Analytics />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
//6.path means url path {routing end point} and element means which component to be rendered
