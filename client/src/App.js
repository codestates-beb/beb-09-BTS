import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import axios from "axios";

//Pages
import MainPage from "./pages/MainPage";
import NFTCollectionPage from "./pages/NFTCollectionPage";
import NFTDetailPage from "./pages/NFTDetailPage";
import NFTCreatePage from "./pages/NFTCreatePage";
//import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";

//Components
import CreateAccount from "./pages/CreateAccount";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

function App() {
  const [collection, setCollection] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/collections",
    }).then((res) => setCollection([...res.data]));
    // console.log(collection[0].name);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage collection={collection} />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route
          path="/collection/:name"
          element={<NFTCollectionPage collection={collection} />}
        />
        <Route
          path="/collection/:name/detail/:id"
          element={<NFTDetailPage />}
        />
        <Route path="/create" element={<NFTCreatePage />} />
        <Route path="/account" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
