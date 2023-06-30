/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ScrollItemList from "../componenets/ScrollItemList";
import axios from "axios";
// import Footer from "../componenets/Footer";
// import Header from "../componenets/Header";
// import { Container } from "semantic-ui-react";

import etherscan_logo from "../assets/etherscan-logo-circle.svg";

export default function NFTCollectionPage({ collection }) {
  const { name } = useParams();
  const [collectionAddr, setCollectionAddr] = useState("");

  axios({
    method: "get",
    url: `http://localhost:8080/collections/${name}`,
  }).then((res) => console.log(res.data));
  // setCollectionAddr(response.data.contractAddress)

  return (
    <div>
      <div style={{ margin: "1rem 4rem" }}>
        <div style={{ display: "flex" }}>
          <h1>{name}</h1>
          <div style={{ display: "flex" }}>
            <a
              href={`https://sepolia.etherscan.io/address/${collection[0].contractAddress}`}
              target="_blank"
            >
              <img
                src={etherscan_logo}
                alt="etherscan_logo"
                style={{ width: "1.5rem", margin: "0.5rem" }}
              ></img>
            </a>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "0 1rem 0 0" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              1,000 ETH
            </div>
            <div style={{ color: "grey" }}>total volume</div>
          </div>
          <div style={{ margin: "0 1rem 0 0" }}>
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>12 ETH</div>
            <div style={{ color: "grey" }}>floor price</div>
          </div>
        </div>
        <ScrollItemList />
      </div>
    </div>
  );
}
