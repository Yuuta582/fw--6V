import {Accordion, Container} from 'react-bootstrap';
import Menu from './components/navbar';
import Footer from './components/footer';

export default function lista() {
    var noticias =[  
        {
            id: 1,
            titulo: "Avanços na Energia Solar",
            conteudo: "Pesquisadores anunciaram novos métodos para aumentar a eficiência dos painéis solares, prometendo uma revolução no setor de energias renováveis."
        },
        {
            id: 2,
            titulo: "Tecnologia 5G: O Futuro das Comunicações",
            conteudo: "A implementação da tecnologia 5G está se expandindo rapidamente, trazendo velocidades de internet sem precedentes e novas oportunidades para a inovação."
        },
        {
            id: 3,
            titulo: "Mudanças Climáticas e seus Impactos",
            conteudo: "Estudos recentes mostram que as mudanças climáticas estão afetando os padrões de clima em todo o mundo, levando a desastres naturais mais frequentes."
        }
    ]
    
  return (
    <> 
    <Menu />
    <Container> 
    <Accordion>
        {noticias.map(noticias => 
      <Accordion.Item eventKey="0">
        <Accordion.Header>{noticias.titulo}</Accordion.Header>
        <Accordion.Body>
         {noticias.conteudo}
        </Accordion.Body>
      </Accordion.Item>
    )}
    </Accordion>
    </Container>
    <Footer />

    </>
  );
}
