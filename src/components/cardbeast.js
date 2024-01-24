import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useVariable } from '../TestVariable/VariableContext';
import { useState } from 'react';



function Cardbeast(props) {
  const { maVariable, setVariable } = useVariable();
  const [error, setError] = useState(null);


  const AddFavorite = async (idbeast) => {
    if(maVariable === 0) {
      window.location.href = "/Login";
    } else {
      try {
        const response = await axios.post('https://bestiary.onrender.com/favoris?beast=' + idbeast + '&user=' + maVariable);
        document.getElementById("add" + props.id).style.display = "block";
      } catch (error) {
        document.getElementById("add" + props.id).style.display = "none";
        document.getElementById("still" + props.id).style.display = "block";
      }
    }
  }



  return (
    <Card style={{ width: '25rem', margin:'30px'}}>
      <Card.Img style={{ maxHeight:'300px'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={() => AddFavorite(props.id)}>Ajouter aux favoris</Button>
        <Card.Text style={{display:"none", color: "Red"}} id={"still" + props.id}>Déjà dans les favoris</Card.Text>
        <Card.Text style={{display:"none", color: "Blue"}} id={"add" + props.id}>Ajouté aux favoris</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cardbeast;
