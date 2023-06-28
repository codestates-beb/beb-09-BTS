import React, {useCallback, useState} from "react";
import {ethers} from "ethers";
import {Button} from "semantic-ui-react";

function Login(props){
    const [provider, setProvider] = useState(undefined); // eslint-disable-line no-unused-vars
    const [signer, setSigner] = useState(undefined) // eslint-disable-line no-unused-vars
    const [walletAddress, setWalletAddress] = useState(undefined) // eslint-disable-line no-unused-vars
    const [currentBalance, setCurrentBalance] = useState(undefined) // eslint-disable-line no-unused-vars

    const connectWallet = useCallback(async () => {

        try {
            if(typeof window.ethereum !== 'undefined') {
               await getMetamaskData();

            } else {
                alert("please install MetaMask")
            }
        } catch (error) {
            console.log(error);
        }
    },[])

    const getMetamaskData = async () =>{
        const _provider = await getProvider();
        const _signer = await getSigner(_provider);

        const result = await Promise.all([
            _signer.getAddress(),
            _provider.getBalance(_signer.getAddress())
        ])

        setWalletAddress(result[0])
        // Decimal 18 포멧
        setCurrentBalance(ethers.formatEther(result[1]))
        // eslint-disable-next-line react/prop-types
        props.setUserState(result);

        //console.log(result);
        //await getWalletData(_signer);
    }
    const getProvider = async () => {
        // 메타마스크에서 제공하는 provider를 ethers 모듈에 저장
        const provider = await new ethers.BrowserProvider(
            window.ethereum
        );

        // 상태변수 저장
        setProvider(provider);
        return provider;
    }

    const getSigner = async (provider) => {
        provider.send("eth_requestAccounts", []);

        // 메타마스크로 서명 요청
        const signer = await provider.getSigner();
        // 서명 저장
        setSigner(signer)
        return signer;
    }



    return (
        <Button className="walletConnect" onClick={connectWallet}>
            Connect Wallet
        </Button>
    )
}

export default Login;