import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import Cardbeast from '../components/cardbeast';
import classes from '../style/home.module.css';

function Product() {
  const [loading, setLoading]= useState(true);
  const [data, setData] = useState([]);
  const [errorBackend, setErrorBackend]= useState(false); // not sure for this line

  useEffect(()=>{
    axios
      .get('https://bestiary.onrender.com/beasts')
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
      < Cardbeast
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

export default Product