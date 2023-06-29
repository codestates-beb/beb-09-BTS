import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";

export default function CreateAccount() {
  function findUsers() {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function insertUser() {
    //const data="test";
    axios
      .post("http://localhost:8080/users", {
        address: "0xAdeb833eee668e50761B4BC8b3Ef476Dc2C86946",
      })
      .then((response) => {
        //response
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function findCollections() {
    axios
      .get("http://localhost:8080/collections")
      .then((response) => {
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function countCollections() {
    axios
      .get("http://localhost:8080/collections/count")
      .then((response) => {
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function insertCollection() {
    const data = {
      contractAddress: "0x01C3b0Af86382cb3d9D2D6D4329536447Fb4c1D5",
      ownerAddress: "0xAdeb833eee668e50761B4BC8b3Ef476Dc2C86946",
      name: "Cat Collection",
    };
    axios
      .post("http://localhost:8080/collections", {
        data,
      })
      .then((response) => {
        //response
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function insertItem() {
    const data = {
      contractAddress: "total",
      ownerAddress: "ddd",
      name: "test",
    };
    axios
      .post("http://localhost:8080/collections", {
        data,
      })
      .then((response) => {
        //response
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="button">
      <div>
        <h1>Account</h1>
        <Button onClick={findUsers}>findUsers</Button>
        <Button onClick={insertUser}>insertUser</Button>
      </div>

      <div>
        <h1>Collection</h1>
        <Button onClick={findCollections}>findCollections</Button>
        <Button onClick={countCollections}>countCollections</Button>
        <Button onClick={insertCollection}>insertCollection</Button>
      </div>

      <div>
        <h1>Item</h1>
        <Button onClick={insertItem}>insertItem</Button>
        <Button onClick={countCollections}>countCollections</Button>
        <Button onClick={insertCollection}>insertCollection</Button>
      </div>

      <div>
        <h1>Collection</h1>
        <Button onClick={findCollections}>findCollections</Button>
        <Button onClick={countCollections}>countCollections</Button>
        <Button onClick={insertCollection}>insertCollection</Button>
      </div>
    </div>
  );
}
