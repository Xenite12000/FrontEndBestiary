import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import classes from "./Products.module.css";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

function Products() {
  const [loading, setLoading]= useState(true);
  const [data, setData] = useState([]);
  const [errorBackend, setErrorBackend]= useState(false); // not sure for this line

  useEffect(()=>{
    axios
      .get('http://localhost:9090/beasts') // original => localhost:3000
      // handle success
      .then((response) => setData(response.data.products))
      // handle error
      .catch((error) => setErrorBackend(true), setLoading(false))
      //.finally(() => setLoading(true))
  }, []);

  if(loading){
    return(
      <>
      <section className={classes.Product}>
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
      <section className={classes.Product}>
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Network Error</p>
        </Alert>
      </section>
      </>
    )
  }
  
  const quantity=0;
  const newArrayProduct = data.map((item) =>
      < ProductItem 
        key={item.id}
        id={item.id}
        title={item.name}
        description={item.description}
        img={item.image}
        univers={item.univers}
      />
    )
    
  return (
    <>
    <section className={classes.products}>
       {newArrayProduct} 
    </section>
    </>
  )
}

export default Products