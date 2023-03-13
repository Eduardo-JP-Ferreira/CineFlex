import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SeatsPage from "../pages/SeatsPage/SeatsPage";


export default function Seats() {

    const { idSessao } = useParams();
    const [listaAssento, setListaAssento] = useState(undefined)

    useEffect(() => {
        console.log("ENTREI SEATS")
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then(resposta => {

            setListaAssento(resposta.data)
            // console.log("Assento",resposta.data)
            // console.log("Assento",resposta.data.seats)
        });
    }, []);

    return (
        <SeatsPage listaAssento={listaAssento} />
    )
}