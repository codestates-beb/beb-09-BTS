import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import logo from "../logo.svg";

function ItemList() {
  return (
    <div>
      {/* 
        특정 item을 클릭하면 특정한 아이디의 아이템 디테일 페이지로 넘어간다!
        /collection/detail/:id
        */}
      <Link to="/collection/detail/:id">
        <Card style={{ margin: "1rem" }}>
          <Image src={logo}></Image>
          <Card.Content>
            <Card.Header>Hello</Card.Header>
            <Card.Description>10 ETH</Card.Description>
          </Card.Content>
          <Card.Content extra>Buy now</Card.Content>
        </Card>
      </Link>
    </div>
  );
}

export default ItemList;
