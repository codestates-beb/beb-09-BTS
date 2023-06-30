/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Header.css";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Login from "./Login";

function Header({ setCreate }) {
  const [createFn, setCreateFn] = useState();
  const [userState, setUserState] = useState(null);
  const [search, setSearch] = useState(""); // eslint-disable-line no-unused-vars
  let walletButton = "";

  if (userState !== null) {
    walletButton = <ConnectedWallet props={userState[1]} />;
  } else {
    walletButton = (
      <Login setUserState={setUserState} setCreateFn={setCreateFn} />
    );
  }
  useEffect(() => {
    if (userState !== null) {
      walletButton = <ConnectedWallet props={userState[1]} />;
    } else {
      walletButton = (
        <Login setUserState={setUserState} setCreateFn={setCreateFn} />
      );
    }
  }, [userState]);

  useEffect(() => {
    setCreate(createFn);
  }, [createFn]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <div className="btnMenu">
        <button>
          <img className="imgMenu" alt="Menu Icon" src="img/iconMenu.png" />
        </button>
      </div>
      <div className="linkToMain">
        <Link to="/">
          <div className="imgLogo">
            <img alt="OpenSea Logo" src="img/opensea-logo.svg" />
          </div>
        </Link>
      </div>
      <div className="inputSearch">
        <Input
          action="Search"
          type="text"
          value={search}
          onChange={(e) => handleSearch(e)}
          placeholder="Search items, collections, and accounts"
          style={{ width: "30rem" }}
        ></Input>
      </div>
      <div className="btnUser">
        <Button.Group>
          {walletButton}
          <div className="ui compact menu">
            <div className="ui item simple dropdown" tabIndex="0">
              User
              <div className="menu transition">
                <div aria-selected="true" className="item">
                  <Link to="userpage">
                    <span className="text">Profile</span>
                  </Link>
                </div>
                <div aria-selected="false" className="item">
                  <span className="text">NFT Colletction</span>
                </div>
                <div aria-selected="false" className="item">
                  <Link to="/account">
                    <span className="text">Create Account</span>
                  </Link>
                </div>
                <div aria-selected="false" className="item">
                  <Link to="/create">
                    <span className="text">Create NFT</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Button.Group>
      </div>
      <Button>Cart</Button>
    </header>
  );
}

function ConnectedWallet(props) {
  const val = Object.values(props);
  // eslint-disable-next-line react/prop-types
  return <Button>{val.toString()} ETH</Button>;
}

export default Header;
