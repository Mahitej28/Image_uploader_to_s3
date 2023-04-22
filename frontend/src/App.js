import React from 'react';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Profile from './components/Profile';


function App() {
  return (
    <ChakraProvider >
      <Box textAlign="center" fontSize="2xl" m="3rem auto" p={5} maxW={700}>
        <Profile />
      </Box>
    </ChakraProvider>
  );
}

export default App;
