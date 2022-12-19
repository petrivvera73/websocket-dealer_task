import React from 'react'
import ReactDOM from 'react-dom/client'
import { Box, ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box w='full' h='full' bgColor='gray.400'>
        <App/>
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
)
