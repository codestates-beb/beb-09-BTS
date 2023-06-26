import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import logo from "../logo.svg";

function CollectionList() {
  return (
    <div>
      {/* 
        특정 collection을 클릭하면 특정한 아이디의 콜렉션 페이지로 넘어간다!
        /collection/:id
      */}
      <Link to="/collection/:id">
        <Card style={{ margin: "1rem" }}>
          <Image src={logo}></Image>
          <Card.Content>
            <Card.Header>Hello</Card.Header>
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
