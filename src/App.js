import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
// import Navbar from "./components/NavBar";
// import VideoDetail from "./components/VideoDetail";
// import SearchFeed from "./components/SearchFeed";
// import ChannelDetail from "./components/ChannelDetail";
// import { Feed } from "@mui/icons-material";

import {Feed, VideoDetail, NavBar, ChannelDetail, SearchFeed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Feed/>} />
        <Route path='/video/:id' element={<VideoDetail/>} />
        <Route path='/channel/:id' element={<ChannelDetail/>} />
        <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;