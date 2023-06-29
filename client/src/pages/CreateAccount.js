import React from "react";
import axios from "axios";
import {Button} from "semantic-ui-react";

export default function CreateAccount() {

    function findUsers() {
        axios.get('http://localhost:3000/users')
            .then((response) => {
                console.log("sucs", response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function insertUser(){
        //const data="test";
        axios.post('http://localhost:3000/users',{
            address:"total"
        }).then((response)=>{
            //response
            console.log("sucs", response.data)
        }).catch((error)=>{
            console.log(error);
        })
    }

    function findCollections() {
        axios.get('http://localhost:3000/collections')
            .then((response) => {
                console.log("sucs", response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function countCollections() {
        axios.get('http://localhost:3000/collections/count')
            .then((response) => {
                console.log("sucs", response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function insertCollection(){
        const data={
            contractAddress:"total",
            ownerAddress:"ddd"
        }
        axios.post('http://localhost:3000/collections', {
                data
        }).then((response)=>{
            //response
            console.log("sucs", response.data)
        }).catch((error)=>{
            console.log(error);
        })
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
        </div>

    );
}
