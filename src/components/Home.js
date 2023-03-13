import HomePage from "../pages/HomePage/HomePage";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(){
    let requisicao 
    const [listaFilmes, setListaFilmes] = useState(undefined)

    useEffect(() => {
		requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		requisicao.then(resposta => setListaFilmes(resposta.data));
	}, []);

    return(
        <HomePage listaFilmes={listaFilmes} />
    )
}