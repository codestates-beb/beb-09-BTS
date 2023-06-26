import React from "react";
import ItemList from "./ItemList";
import { Card } from "semantic-ui-react";

export default function ScrollItemList() {
  return (
    <div>
      <Card.Group style={{ margin: "1rem" }} itemsPerRow={4}>
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </Card.Group>
    </div>
  );
}
