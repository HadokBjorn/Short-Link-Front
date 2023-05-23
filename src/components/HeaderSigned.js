import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeaderSigned(){
    const token = localStorage.getItem("token")
    const name = localStorage.getItem("name")
    const navigate = useNavigate();

    function logout(){
        const url = `${process.env.REACT_APP_API_URL}/logout`;
        const config = {headers: {Authorization: `Bearer ${token}`}}
        axios.get(url,config)
            .then((res)=>{
                localStorage.clear();
                alert(res.data)
                window.location.reload(false)
                navigate("/")
            })
            .catch((err)=>{
                alert(err.data.message)
            })
        }

    return(
        <HeaderContainer>
            <p>Seja bem-vindo(a), {name}!</p>
            <div>
                <Link to={"/home"}>
                    <p>Home</p>
                </Link>
                <Link to={"/"}>
                    <p>Ranking</p>
                </Link>

                <p id="logout" onClick={logout}>Sair</p>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    div{
        display: flex;
        align-items: center;
        gap: 22px;
        p{
            color: #000;
            cursor: pointer;
        }
        p:hover{
            color: #5D9040;
        }
        a{
            text-decoration: none;
            padding-top: 0;
        }
        #logout{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5D9040;
    }
`