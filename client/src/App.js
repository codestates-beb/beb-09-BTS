import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

//Pages
import MainPage from "./pages/MainPage";
import NFTCollectionPage from "./pages/NFTCollectionPage";
import NFTDetailPage from "./pages/NFTDetailPage";
import NFTMintPage from "./pages/NFTMintPage";
//import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";

//Components
// import Header from "./componenets/Header";
// import Footer from "./componenets/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/collection/:name" element={<NFTCollectionPage />} />
        <Route
          path="/collection/:name/detail/:id"
          element={<NFTDetailPage />}
        />
        <Route path="/mint" element={<NFTMintPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
