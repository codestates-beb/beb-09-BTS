/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import logo from "../logo.svg";

function CollectionList({ name }) {
  // const name = "BTS";
  console.log(name);
  return (
    <div>
      {/* 
        특정 collection을 클릭하면 특정한 아이디의 콜렉션 페이지로 넘어간다!
        /collection/:name
      */}
      <Link to={`/collection/${name}`}>
        <Card style={{ margin: "1rem" }}>
          <Image src={logo}></Image>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <div style={{ display: "flex" }}>
              <div style={{ flex: "1 1 0px" }}>
                <Card.Description>Floor</Card.Description>
                <div>100 ETH</div>
              </div>
              <div style={{ flex: "1 1 0px" }}>
                <Card.Description>Total Volume</Card.Description>
                <div>1,000 ETH</div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
}

export default CollectionList;
