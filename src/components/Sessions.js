import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SessionsPage from "../pages/SessionsPage/SessionsPage";


export default function Sessions(){

    const {idFilme} = useParams();
    const [sessaoFilme, setSessaoFilme] = useState(undefined)
    

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)

		requisicao.then(resposta => {
	        setSessaoFilme(resposta.data)
		});
	}, []);

    return(
        <SessionsPage sessaoFilme={sessaoFilme}/>
    )
}