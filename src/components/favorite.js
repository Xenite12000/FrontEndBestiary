import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useVariable } from '../TestVariable/VariableContext';
import { useState } from 'react';
import axios from 'axios';



function Cardfavorite(props) {

  const { maVariable, setVariable } = useVariable();
  const [error, setError] = useState(null);

  if(maVariable === 0) {
    window.location.href = "/Login";
  }


  const DeleteFavorite = async (idbeast) => {
    try {
      const response = await axios.delete('https://bestiary.onrender.com/favoris?beast=' + idbeast + '&user=' + maVariable);

    } catch (error) {
      console.log("nooooooooooooooooooon")
    }
    window.location.href = "/favorite"
  }


  return (
    <Card style={{ width: '25rem', margin:'30px'}}>
      <Card.Img style={{ maxHeight:'300px'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={() => DeleteFavorite(props.id)}>Retirer des favoris</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardfavorite;