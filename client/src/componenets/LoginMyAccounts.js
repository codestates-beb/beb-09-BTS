import React, {useState} from 'react';
import axios from "axios";
import {Button, Modal} from "semantic-ui-react";
function LoginMyAccounts() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("")
    const [open, setOpen] = useState(false)
    //const [loading, setLoading] = useState(false);

    const handleId =(e) =>{
        setId(e.target.value)
    }

    const handlePassword =(e) =>{
        setPassword(e.target.value)
    }

    const LoginFunc = () =>{
        axios.post('/onLogin',null,{
            params:{
                'userId' : id,
                'userPw' : password
            }
        }).then(res=>{
            if(res.data.userId === undefined){
                alert("입력한 id가 일치하지 않습니다")
            }else if(res.data.userId === null){
                alert("입력한 password가 일치하지 않습니다")
            }else if(res.data.userId===id){
                sessionStorage.setItem('userId', id)
            }
            document.location.href ='/'
        }).catch()
    }

    return (
        <Modal
            closeIcon
            onClose={()=> setOpen(false)}
            onOpen={()=>setOpen(true)}
            open={open}
            trigger={<Button>Modal</Button>}
        >
            <div className="PageLogin">
                <h1>Login Component</h1>
                <div>
                    <label htmlFor="id">ID : </label>
                    <input type="text" value={id} onChange={handleId}/>
                </div>
                <div>
                    <label htmlFor="password">PW : </label>
                    <input type="password" value={password} onChange={handlePassword}/>
                </div>
                <button type="button" onClick={LoginFunc}>Login</button>
            </div>

        </Modal>

    );
}

export default  LoginMyAccounts;