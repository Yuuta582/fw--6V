import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Menu from "./components/navbar";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(() => {
            document.title = "Minha Promessa"
            setDivida(saoLoguinho("da vida"))
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
function saoLoguinho(texto){ 
    setTimeout(() =>{
        return(texto)
    },2000)
}
