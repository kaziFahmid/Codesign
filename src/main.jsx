import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Main } from './Components/Main/Main'
import { Container } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Container maxWidth='xl'>
<Main/>
</Container>
  </React.StrictMode>,
)
