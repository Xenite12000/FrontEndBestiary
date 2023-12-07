import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cardbeast() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6_mB4jA3pY07goCZ4zJPpwHaFx?rs=1&pid=ImgDetMain" />
          <Card.Body>
            <Card.Title>Motthias Chatthias</Card.Title>
            <Card.Text>
              Créature étrange et aux décisions aléatoires
            </Card.Text>
            <Button variant="primary">Ajouter aux favoris</Button>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cardbeast;
