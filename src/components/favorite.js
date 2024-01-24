import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Cardfavorite(props) {
  return (
    <Card style={{ width: '25rem', margin:'30px'}}>
      <Card.Img style={{ maxHeight:'300px'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Retirer des favoris</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardfavorite;