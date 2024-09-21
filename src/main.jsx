import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserListApp from './components/UserListApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserListApp/>
  </StrictMode>,
)
