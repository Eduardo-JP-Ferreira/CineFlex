import styled from "styled-components"
import Home from "./components/Home"
import Seats from "./components/Seats"
import Sessions from "./components/Sessions"
import Success from "./components/Success"
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>

           <BrowserRouter>

			    <Routes>

				    <Route path="/" element={<Home />} />
				    <Route path="/sessoes/:idFilme" element={<Sessions />} />
                    <Route path="/assentos/:idSessao" element={<Seats />}/>
				    <Route path="/sucesso" element={<Success />}/> 

			    </Routes>
		    </BrowserRouter>

          
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
