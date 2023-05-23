import styled from "styled-components"
import ShortlyLogo from "../components/ShortlyLogo"
import { useState } from "react"
import NavbarLoginAndRegister from "../components/NavbarLoginAndRegister"
import { FaTrashAlt } from "react-icons/fa"
import HeaderSigned from "../components/HeaderSigned"

export default function HomeSignedPage() {
  const [loading, setLoading] = useState(false)
  
  if(loading){
    return(
      <HomeSignedContainer className="center">
        <span className="loader"></span>
      </HomeSignedContainer>
    )
  }
  return (
    <HomeSignedContainer>
      <HeaderSigned/>
      <ShortlyLogo />
        
      <form>
        <article id="insert-link">
          <input placeholder="Links que cabem no bolso"/>
          <button>Encurtar link</button>
        </article>

        <LinkCard>
          <div>
            <p>http://www.google.com</p>
            <p>ShortUrl</p>
            <p>Quantidade de Visitantes: 200</p>
          </div>
          <button>
            <FaTrashAlt color="#EA4F4F" size={26}/>
          </button>
        </LinkCard>
        <LinkCard>
          <div>
            <p>http://www.google.com</p>
            <p>ShortUrl</p>
            <p>Quantidade de Visitantes: 200</p>
          </div>
          <button>
            <FaTrashAlt color="#EA4F4F" size={26}/>
          </button>
        </LinkCard>
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
      background: #FFFFFF;
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 0px 12px 12px 0px;

      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: #fff;
    }
`