import React from "react";
import axios from "axios";
import {Button} from "semantic-ui-react";

export default function CreateAccount() {

    function findUsers() {
        axios.get('http://localhost:3000/users/users')
            .then((response) => {
                console.log("sucs", response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function insertUser(){
        //const data="test";
        axios.post('http://localhost:3000/users/users',{
            address:"total"
        }).then((response)=>{
            //response
            console.log("sucs", response.data)
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <h1>Create Account</h1>
            <Button onClick={findUsers}>findUsers</Button>
            <Button onClick={insertUser}>insertUser</Button>
        </div>
    );
}
