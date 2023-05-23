import styled from "styled-components"
import ShortlyLogo from "../components/ShortlyLogo"
import { useState } from "react"
import championImage from "../assets/ranking-image.png"
import NavbarLoginAndRegister from "../components/NavbarLoginAndRegister"

export default function RankingPage() {
  const [loading, setLoading] = useState(false)
  
  if(loading){
    return(
      <RakingContainer className="center">
        <span className="loader"></span>
      </RakingContainer>
    )
  }
  return (
    <RakingContainer>
      <NavbarLoginAndRegister/>
      <ShortlyLogo />
        <h2>
            <img src={championImage} alt="imagem de troféu"/>
            Ranking
        </h2>
      <form>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
        <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
      </form>
      <h2>Crie sua conta para usar nosso serviço!</h2>

    </RakingContainer>
  )
}

const RakingContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    margin-top: 82px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
        img{
            margin-right: 10px;
        }
    }
    form{
        padding-top: 10px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 24px 24px 0px 0px;
        margin-top: 57px;

        display: flex;
        flex-direction: column;
        justify-content: start;

        p{
        width: 90%;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        gap: 10px;
        }
    }
    
    
    
    @media (min-width: 768px) {
        form{
        width: 80%;
        }
    }

`
