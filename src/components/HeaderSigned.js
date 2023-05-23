import styled from "styled-components";
export default function HeaderSigned(){
    return(
        <HeaderContainer>
            <p>Seja bem-vindo(a), Pessoa!</p>
            <div>
                <p>Home</p>
                <p>Ranking</p>
                <p>Sair</p>
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
        p{color: #000;}
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5D9040;
    }
`