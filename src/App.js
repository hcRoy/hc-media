import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#121212" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" exact element={<VideoDetail />}></Route>
          <Route path="/channel/:id" exact element={<ChannelDetail />}></Route>
          <Route
            path="/search/:searchTerm"
            exact
            element={<SearchFeed />}
          ></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
