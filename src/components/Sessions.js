import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SessionsPage from "../pages/SessionsPage/SessionsPage";


export default function Sessions(){

    const {idFilme} = useParams();
    const [sessaoFilme, setSessaoFilme] = useState(undefined)
    
    console.log("idF",idFilme)
    console.log("SES",sessaoFilme)
    // console.log("SES da",sessaoFilme.days)
    // console.log("SES da sh",sessaoFilme.days[0].showtimes)

    useEffect(() => {
        console.log("ENTREI")
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)

		requisicao.then(resposta => {
	
            setSessaoFilme(resposta.data)
            // console.log("res",resposta.data)

		});
	}, []);

    return(
        <SessionsPage sessaoFilme={sessaoFilme}/>
    )
}