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
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/collection" element={<NFTCollectionPage />} />
        <Route path="/collection/detail" element={<NFTDetailPage />} />
        <Route path="/mint" element={<NFTMintPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
