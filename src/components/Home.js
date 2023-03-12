import HomePage from "../pages/HomePage/HomePage";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(){
    let requisicao 
    const [listaFilmes, setListaFilmes] = useState([])

    useEffect(() => {
		requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => {
			// console.log("api",resposta.data);
            setListaFilmes(resposta.data)
            // console.log("img",listaFilmes);
		});
	}, []);
    // console.log("lista2",listaFilmes);

    function clicouFilme(){
        alert("jda")
    }
    return(
        <HomePage listaFilmes={listaFilmes} clicouFilme={clicouFilme}/>
    )
}