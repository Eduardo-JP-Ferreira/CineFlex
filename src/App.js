import styled from "styled-components"
import Home from "./components/Home"
import Seats from "./components/Seats"
import Sessions from "./components/Sessions"
import Success from "./components/Success"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"


export default function App() {

    const [selecionado, setSelecionado] = useState([])
    const [ids, setIds] = useState([])
    const [idAssento, setIdAssento] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [listaAssento, setListaAssento] = useState(undefined)

    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>

           <BrowserRouter>

			    <Routes>

				    <Route path="/" element={<Home />} />
				    <Route path="/sessoes/:idFilme" element={<Sessions />} />
                    <Route path="/assentos/:idSessao" element={<Seats 
                     listaAssento={listaAssento}
                     setListaAssento={setListaAssento}
                     selecionado={selecionado}
                     setSelecionado={setSelecionado}
                     ids={ids}
                     setIds={setIds}
                     name={name}
                     setName={setName}
                     cpf={cpf}
                     setCpf={setCpf}
                     idAssento={idAssento}
                     setIdAssento={setIdAssento}
                     />}/>
				    <Route path="/sucesso" element={<Success
                    listaAssento={listaAssento}
                    selecionado={selecionado}
                    name={name}
                    cpf={cpf}
                    />}/> 

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
