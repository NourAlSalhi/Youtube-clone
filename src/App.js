import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
//style
import './App.css'
const App = () => {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        {/* <Route path='*' element={<h1 style={{backgroundColor:'white'}}>Page Not Found</h1>} /> */}
      </Routes>
    </Box>
  )
}

export default App