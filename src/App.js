import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import UserContext from "./contexts/UserContext"
import HomeSignedPage from "./pages/HomeSignedPage"
import RankingPage from "./pages/RankingPage"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<RankingPage />} />
            <Route path="/home" element={<HomeSignedPage />} />
            <Route path="/Login" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #fff;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
