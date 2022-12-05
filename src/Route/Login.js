import { useEffect } from "react";
import Header from "../Component/Header";

function Login() {
    useEffect(() =>{
        console.log("로그인");
    },[])
    return (
        <div>
            <Header />
        </div>
    )
}

export default Login;