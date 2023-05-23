import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react";
import axios from "axios";
import ShortlyLogo from "../components/ShortlyLogo";
import NavbarLoginAndRegister from "../components/NavbarLoginAndRegister";

export default function SignInPage() {
  const navigate = useNavigate();
  const form = {email:"", password:""}
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false)
  const buttonClick = () =>{
    form.email = emailRef.current.value;
    form.password = passwordRef.current.value;
  }

  const request = () =>{
    setLoading(true)
    const url = `${process.env.REACT_APP_API_URL}/signin`;
    axios.post(url, form)
    .then((res)=>{
      localStorage.setItem("token",res.data)
      setLoading(false)
      navigate("/home")
    })
    .catch((err)=>{
      setLoading(false)
      alert(err.response.data)
    })
  }

  const login = (e) =>{
    e.preventDefault();
    buttonClick();
    if(form.email===""||form.password==="")return alert("Todos os campos devem ser preenchidos")
    request();
  }
  if(loading){
    return(
      <SingInContainer className="center">
        <span className="loader"></span>
      </SingInContainer>
    )
  }
  return (
    <SingInContainer>
      <NavbarLoginAndRegister loginColor={"#5D9040"}/>
      <Link to={"/"}>
        <ShortlyLogo/>
      </Link>

      <form onSubmit={login}>
        <input placeholder="E-mail" type="email" ref={emailRef}/>
        <input placeholder="Senha" type="password" ref={passwordRef}
        autocomplete="new-password" />
        <button type="submit" >Entrar</button>
      </form>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  form{height:inherit}
  input{
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
  }
  button{
    width: 182px;
    height: 60px;
  }
  @media (min-width: 768px) {
    form{
      width: 80%;
    }
  }
`
