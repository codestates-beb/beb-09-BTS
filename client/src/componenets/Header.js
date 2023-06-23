import React from 'react';
import "../assets/Header.css"
import {Input} from "semantic-ui-react";
import {Button} from "semantic-ui-react";

function Header() {
    return(
        <header>
                <div className="btnMenu">
                    <button>
                        <img className="imgMenu" alt="Menu Icon" src="img/iconMenu.png"/>
                    </button>
                </div>
                <div className="linkToMain">
                    <a href="/">
                        <div className="imgLogo">
                            <img alt="OpenSea Logo" src="img/opensea-logo.svg"/>
                        </div>
                    </a>
                </div>
                <div className="inputSearch">
                    <Input type="text" placeholder="Search items, collections, and accounts">

                    </Input>
                </div>
            <div className="btnUser">
                <Button.Group>
                    <Button>Connect wallet</Button>
                    <Button>userImg</Button>
                </Button.Group>
            </div>
            <Button>Cart</Button>
        </header>

    )
}

export default  Header;