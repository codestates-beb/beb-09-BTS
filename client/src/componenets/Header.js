import React from "react";
import "../assets/Header.css";
import { Input, Button, Icon } from "semantic-ui-react";

function Header() {
  return (
    <header>
      <div className="btnMenu">
        <button>
          <Icon className="imgMenu" alt="Menu Icon" name="align justify" />
        </button>
      </div>
      <div className="linkToMain">
        <a href="/">
          <div className="imgLogo">
            <img
              alt="OpenSea Logo"
              src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"
              width="100rem"
            />
          </div>
        </a>
      </div>
      <div className="inputSearch">
        <Input
          style={{ width: "40rem" }}
          action="Search"
          placeholder="Search items, collections, and accounts"
        ></Input>
      </div>
      <div className="btnUser">
        <Button.Group>
          <Button>Connect wallet</Button>
          <Button>userImg</Button>
        </Button.Group>
      </div>
      <Button>Cart</Button>
    </header>
  );
}

export default Header;
