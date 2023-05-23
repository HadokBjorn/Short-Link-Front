import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarLoginAndRegister({loginColor, registerColor}){
    return(
        <NavbarLoginRegister>
            <Link to={"/login"}>
                <p style={{"color": `${loginColor?loginColor: "black"}`}}>Entrar</p>
            </Link>
            <Link to={"/cadastro"}>
                <p style={{"color": `${registerColor?registerColor:"black"}`}}>Cadastrar-se</p>
            </Link>
        </NavbarLoginRegister>
    )
}

const NavbarLoginRegister = styled.header`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 22px;
    margin-bottom: 28px;
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
        }
`