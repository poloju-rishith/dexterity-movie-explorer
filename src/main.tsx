import React from 'react'
import ReactDOM from 'react-dom/client'

import MovieExplorerApplication from './movie-explorer-application.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieExplorerApplication />
  </React.StrictMode>,
)
