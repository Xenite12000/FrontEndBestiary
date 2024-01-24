import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import classes from '../style/home.module.css';
import Listuniverse from '../components/listuniverse';

function Universe() {
  const [loading, setLoading]= useState(true);
  const [data, setData] = useState([]);
  const [errorBackend, setErrorBackend]= useState(false);

  useEffect(()=>{
    axios
      .get('https://bestiary.onrender.com/universes')
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
      < Listuniverse
        key={item.idUniverse}
        id={item.idUniverse}
        name={item.nameUniverse}
        img={item.imgUniverse}

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

export default Universe