import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Menu from "./components/navbar";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(async() => {
            document.title = "Minha Promessa"
            const x = await saoLonguinho("da vida")
            setDivida(x)
        }, 4000);
    })
    return <>
        <Menu />
        <Container>
            Promessas {(divida==="" ? <img src="loading.gif" width={89} height={45}/> : divida)}
        </Container>
        <Footer />
    </>
}
function saoLonguinho(texto){ 
    return new Promise((resposta) => 
        setTimeout(() => {
        resposta(texto)
    }, 4000))
}
