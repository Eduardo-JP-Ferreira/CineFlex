import SuccessPage from "../pages/SuccessPage/SuccessPage";

export default function Success({listaAssento, selecionado, name, cpf}){


    return(
        <SuccessPage
        listaAssento={listaAssento}
        selecionado={selecionado}
        name={name}
        cpf={cpf}
        />
    )
}