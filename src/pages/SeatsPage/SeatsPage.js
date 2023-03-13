import { useState } from "react"
import styled from "styled-components"

export default function SeatsPage(props) {
    // { console.log("ListaA", props.listaAssento) }
    // const listaAssentoNovo = [...props.listaAssento.seats]
    // {console.log("ListaB",listaAssentoNovo)}
    // let seatColor = "red"
    // const white = "white"
    // const red = "red"

    const [selecionado, setSelecionado] = useState([])
    console.log("Sele: ",selecionado)
    let verificaSelecao
    function clicou(nome, disponibilidade){
        console.log("CLICOU")
        if(disponibilidade === false){
            alert("Esse assento não está disponível")
        }
        else if(selecionado.includes(nome)===true){
            const buscaIndice = selecionado.indexOf(nome)
            selecionado.splice(buscaIndice,1)
            const novoArray = [...selecionado]
            setSelecionado(novoArray)
        }
        else{
            const novoArray = [...selecionado, nome]
            setSelecionado(novoArray)
        }
        
      
    }

    if (props.listaAssento === undefined) {
        return <Carregando>Carregando...</Carregando>
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {props.listaAssento.seats.map((item) =>
                    <>
                        {selecionado.includes(item.name) ? verificaSelecao = true: verificaSelecao = false}
                        <SeatItem disponivel={item.isAvailable} sele={verificaSelecao} onClick={()=> clicou(item.name, item.isAvailable)}>{item.name}</SeatItem>
                    </>
                )}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle nome="selecionado" />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle nome="disponivel" />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle nome="indisponivel" />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
                </div>
                <div>
                    <p>Tudo em todo lugar ao mesmo tempo</p>
                    <p>Sexta - 14h00</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const Carregando = styled.div`
display: flex;
font-size: 30px;
justify-content: center;
margin-top: 100px;
`

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: ${props => props.nome === "selecionado" ? "1px solid #0E7D71" : (props => props.nome === "disponivel" ? "1px solid #7B8B99" : "1px solid #F7C52B")};
    background-color: ${props => props.nome === "selecionado" ? "#1AAE9E" : (props => props.nome === "disponivel" ? "#C3CFD9" : "#FBE192")};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
    border: ${props => props.sele === true ? "1px solid #0E7D71" : (props => props.disponivel === true ? "1px solid #808F9D" : "1px solid #F7C52B")};       
    background-color: ${props => props.sele === true ? "#1AAE9E" : (props => props.disponivel === true ? "#C3CFD9" : "#FBE192")};   

    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`