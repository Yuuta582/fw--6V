import Menu from "./components/navbar";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";


export default function Index() {
  return <>
    <Menu />
    <Container>
      <h1>Olá Turma 6V</h1>
    </Container>
    <Footer />
  </>
}
