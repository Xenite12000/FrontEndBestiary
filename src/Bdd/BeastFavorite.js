import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import classes from '../style/home.module.css';
import { useVariable } from '../VariableUser/VariableContext';
import Cardfavorite from '../components/favorite';

function BeastFavorite() {
  const [loading, setLoading]= useState(true);
  const [data, setData] = useState([]);
  const [errorBackend, setErrorBackend]= useState(false);
  
  const { maVariable, setVariable } = useVariable();

  useEffect(()=>{
    axios
      .get('https://bestiary.onrender.com/beasts?user=' + maVariable)
      // handle success
      .then((response) => setData(response.data))
      // handle error
      .catch((error) => setErrorBackend(true), setLoading(false))
      //.finally(() => setLoading(true))
  }, []);

  if(loading){
    return(
      <>
      <section>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>
      </section>
      </>
    )
  }

  if(errorBackend){ 
    return(
      <>
      <section>
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Network Error</p>
        </Alert>
      </section>
      </>
    )
  }
  
  const newArrayProduct = data.map((item) =>
      < Cardfavorite
        key={item.idBeast}
        id={item.idBeast}
        name={item.nameBeast}
        img={item.imgBeast}
        description={item.descriptionBeast}

      />
    )
    
  return (
    <>
    <section  className={classes.products}>
       {newArrayProduct} 
    </section>
    </>
  )
}

export default BeastFavorite