/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Card } from "semantic-ui-react";
import axios from "axios";

export default function ScrollItemList({ items }) {
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        {items.map((el) => {
          return <ItemList key={el.name} item={el.name} tokenId={el.tokenId} />;
        })}
      </Card.Group>
    </div>
  );
}
