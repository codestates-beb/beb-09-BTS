import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';

//Pages
import MainPage from "./pages/MainPage";
import NFTCollectionPage from "./pages/NFTCollectionPage";
//import NFTMintPage from "./pages/NFTMintPage";
//import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";

//Components
import Header from "./componenets/Header";
//import Footer from "./componenets/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/userpage' element={<UserPage />} />
        <Route path='/collection' element={<NFTCollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
