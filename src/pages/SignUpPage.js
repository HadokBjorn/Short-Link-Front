import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import ShortlyLogo from "../components/ShortlyLogo"
import { useRef, useState } from "react"
import axios from "axios"
import NavbarLoginAndRegister from "../components/NavbarLoginAndRegister"

export default function SignUpPage() {
  const form = {name: "", email:"", password:"", confirmPassword:""}
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPassword = useRef("")
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)


  const buttonClick = () =>{
    form.name = nameRef.current.value;
    form.email = emailRef.current.value;
    if(passwordRef.current.value === confirmPassword.current.value){
      form.password = passwordRef.current.value;
      form.confirmPassword = form.password;
    }else{
      alert("Senha e confirmação de senha devem ser iguais!")
    }
  }

  const request = () =>{
    setLoading(true)
    const url = `${process.env.REACT_APP_API_URL}/signup`;
    axios.post(url, form)
      .then((res)=>{
        console.log(res)
        setLoading(false)
        navigate("/login")
      })
      .catch((err)=>{
        setLoading(false)
        alert(err.response.data)
      })
  }

  const register = (e) =>{
    e.preventDefault();
    buttonClick();
    if(form.email===""||form.name===""||form.password==="")return alert("Todos os campos devem ser preenchidos")
    request();
  }
  if(loading){
    return(
      <SingUpContainer className="center">
        <span className="loader"></span>
      </SingUpContainer>
    )
  }
  return (
    <SingUpContainer>
      <NavbarLoginAndRegister registerColor={"#5D9040"}/>
      <Link to={"/"}>
        <ShortlyLogo/>
      </Link>


      <form onSubmit={register}>
        <input placeholder="Nome" type="text" ref={nameRef} />
        <input placeholder="E-mail" type="email" ref={emailRef} />
        <input placeholder="Senha" type="password" autoComplete="new-password" ref={passwordRef}/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" ref={confirmPassword}/>
        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/"}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
