import styled from "styled-components"
import ShortlyLogo from "../components/ShortlyLogo"
import { useEffect, useRef, useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import HeaderSigned from "../components/HeaderSigned"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {ThreeDots} from "react-loader-spinner"

export default function HomeSignedPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [links, setLinks] = useState("");
  const [updatePage, setUpdatePage] = useState("");
  const form = {url: ""}
  const token = localStorage.getItem("token")
  const linkRef = useRef();


  useEffect(()=>{
    setLoading(true)

    const url = `${process.env.REACT_APP_API_URL}/users/me`;
    const config = {headers: {Authorization: `Bearer ${token}`}}
    axios.get(url, config)
      .then((res)=>{
        setLoading(false)
        setLinks(res.data)
      })
      .catch((err)=>{
        setLoading(false)
        navigate("/Login")
        console.log(err)
      })
  },[token, navigate, updatePage,])

  function request(){
    const url = `${process.env.REACT_APP_API_URL}/urls/shorten`;
    const config = {headers: {Authorization: `Bearer ${token}`}}
    axios.post(url,form,config)
    .then((res)=>{
      setUpdatePage(res.data.shortUrl)
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })
  }

  function createShortLink(e){
    e.preventDefault();
    form.url = linkRef.current.value
    setLoading(true)
    request();
  }

  function redirect (shortUrl){
    const url = `${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`;
    window.open(url)
  }

  function deleteUrl(id){
    setDeleting(true)
    const url = `${process.env.REACT_APP_API_URL}/urls/${id}`;
    const config = {headers: {Authorization: `Bearer ${token}`}}
    axios.delete(url, config)
      .then(()=>{
        setDeleting(false)
        alert("Link deletado com sucesso!")
        setUpdatePage("deleted")
      })
      .catch((err)=>{
        setDeleting(false)
        alert(err.data.message)
      })
  }
  
  if(loading){
    return(
      <HomeSignedContainer className="center">
        <span className="loader"></span>
      </HomeSignedContainer>
    )
  }
  return (
    <HomeSignedContainer>
      <HeaderSigned />
      <ShortlyLogo />
        
      <form onSubmit={createShortLink}>
        <article id="insert-link">
          <input placeholder="Links que cabem no bolso" type="url" ref={linkRef}/>
          <button type="submit">Encurtar link</button>
        </article>
        {links.shortenedUrls?.map((link,i)=>(
          <LinkCard key={i}>
            <div>
              <p>{link.url}</p>
              <p id="short-url" onClick={()=>redirect(link.shortUrl)}>{link.shortUrl}</p>
              <p>Quantidade de Visitantes: {link.visitCount}</p>
            </div>
            <button onClick={()=>deleteUrl(link.id)}>
              {deleting?
              <ThreeDots 
              height="80" 
              width="80" 
              radius="10"
              color="#EA4F4F" 
               />:
              <FaTrashAlt color="#EA4F4F" size={26}/>}
            </button>
          </LinkCard>
        ))}
        
        
      </form>

    </HomeSignedContainer>
  )
}

const HomeSignedContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

    form{
        margin-top: 147px;

        display: flex;
        flex-direction: column;
        justify-content: start;

        #insert-link{
          height: 60px;
          width: 100%;
          display: flex;
          justify-content: space-between;
            input{
              width: 65%;
              border: 1px solid rgba(120, 177, 89, 0.25);
              box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
              border-radius: 12px;

              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
            }
            button{
              width: 20%;
              background-color: #5D9040;
              border-radius: 12px;

              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 18px;
              color: #fff;
            }
        }
    }
    
    
    
    @media (min-width: 768px) {
        form{
        width: 80%;
        }
    }

`
const LinkCard = styled.article`
  margin-top: 42px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
    div{
      #short-url{
        cursor: pointer;
      }
      #short-url:hover{
        color: #fff;
        text-decoration: underline dashed;
      }
      padding: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 90%;
      background-color: #80CC74;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 12px 0px 0px 12px;

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
    button{
      width: 10%;
      height: inherit;
      background: #FFFFFF;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 0px 12px 12px 0px;

      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: #fff;
      div{
        width: 100%;
        height: -webkit-fill-available;
        max-height: 20px;
        border: none;
        padding: 0;
        border-radius: 0;
        background-color: transparent;
      }
    }
`