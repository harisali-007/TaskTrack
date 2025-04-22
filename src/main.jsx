import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ This is important!
import { TaskProvider } from './context/TaskContext.jsx';

import App from './App.jsx'
createRoot(document.getElementById('root')).render(  
  <StrictMode>
    <TaskProvider>
    <App />
    </TaskProvider>

  </StrictMode>,
)
