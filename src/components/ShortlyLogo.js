import styled from "styled-components"
import logoImage from "../assets/Logo.png"
export default function ShortlyLogo() {
    return (
        <LogoContainer>
            <img src={logoImage} alt="Logo"/>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

