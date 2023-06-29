import React, {useState} from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";

export default function CreateAccount() {


  function insertUser() {
    //const data="test";
    axios
      .post("http://localhost:3000/users", {
        address: "total",
      })
      .then((response) => {
        //response
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  function countCollections() {
    axios
      .get("http://localhost:3000/collections/count")
      .then((response) => {
        console.log("sucs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function insertCollection() {
    const data = {
      address: "total",
      ownerAddress: "ddd",
      name :"test"
    };
    axios
      .post("http://localhost:3000/collections", {
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
      name :"test"
    };
    axios
        .post("http://localhost:3000/collections", {
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

  //============================== Warning==================================
    const [items,setItems] = useState(); // eslint-disable-line no-unused-vars
    const [collections,setCollections] = useState(); // eslint-disable-line no-unused-vars
    const [users,setUsers] = useState(); // eslint-disable-line no-unused-vars
    const [attributes,setAttributes] = useState(); // eslint-disable-line no-unused-vars
    function findUsers() {
        axios
            .get("http://localhost:3000/users")
            .then((response) => {
                console.log("sucs", response.data);

                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function findCollections() {
        axios
            .get("http://localhost:3000/collections")
            .then((response) => {
                console.log("sucs", response.data);
                setCollections(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function findItems() {
        axios
            .get("http://localhost:3000/items")
            .then((response) => {
                console.log("sucs", response.data);
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function findAttributes() {
        axios
            .get("http://localhost:3000/attributes")
            .then((response) => {
                console.log("sucs", response.data);
                setAttributes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    function dataItems(){
        for(var i=0; i<items.length; i++){
            const id = items[i].tokenId;
            const data={
                tokenId:items[i].tokenId,
                collectionAddress:items[i].collectionAddress,
                attributes:"",
                img:items[i].ipfs,
                owner:items[i].ownerAddress
            }
             axios
                .get(`http://localhost:3000/attributes/${id}`)
                .then((response) => {
                    //console.log("res: ",response.data);

                    data.attributes =response.data
                })
                .catch((error) => {
                    console.log(error);
                });

                //get Item all
                console.log("all: ",data);

                //get Item by Id
                if(data.tokenId === '1'){
                    console.log("id: ",data);
                }

        }
    }

  //============================== Warning==================================

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
        <Button onClick={findItems}>findItems</Button>
        <Button onClick={insertItem}>insertItem</Button>
      </div>

      <div>
        <h1>Attribute</h1>
        <Button onClick={findAttributes}>findAttributes</Button>
      </div>

        <div>
            <h1>ItemData</h1>
            <Button onClick={dataItems}>dataAll</Button>
        </div>
    </div>
  );
}
