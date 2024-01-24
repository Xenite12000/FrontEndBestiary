import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


function Listuniverse(props) {
  return (
    <Card style={{ width: '30rem', margin:'30px'}}>
        <div>
            <Card.Img style={{ maxHeight:'300px'}} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title style={{ marginBottom: "30px" }}>{props.name}</Card.Title>
            </Card.Body>
        </div>
      <Button variant="primary" href={"BeastsUniverse#" + props.id} style={{  position: "absolute", bottom: "0", width:"100%"}}>Voir les bêtes de l'univers</Button>
    </Card>
  )
}

export default Listuniverse;
