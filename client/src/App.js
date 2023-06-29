import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

//Pages
import MainPage from "./pages/MainPage";
import NFTCollectionPage from "./pages/NFTCollectionPage";
import NFTDetailPage from "./pages/NFTDetailPage";
import NFTMintPage from "./pages/NFTCreatePage";
//import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";

//Components
import CreateAccount from "./pages/CreateAccount";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/collection/:name" element={<NFTCollectionPage />} />
        <Route
          path="/collection/:name/detail/:id"
          element={<NFTDetailPage />}
        />
        <Route path="/create" element={<NFTMintPage />} />
        <Route path="/account" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
