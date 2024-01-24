import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useVariable } from '../TestVariable/VariableContext';






function Login() {

  const { maVariable, setVariable } = useVariable();
  var emailact = "";
  var pwact = "";

  console.log(maVariable)
  if(maVariable !== 0) {
    window.location.href = "/Home";
  }

  const [data, setData] = useState([]);
  const [errorBackend, setErrorBackend] = useState(false);

  useEffect(() => {
    axios
      .get('https://bestiary.onrender.com/users')
      .then((response) => setData(response.data))
      .catch((error) => setErrorBackend(true));
  }, []);

  if (errorBackend) {
    return (
      <>
        <section>
          <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Network Error</p>
          </Alert>
        </section>
      </>
    );
  }

  const handleConnect = () => {
    emailact = document.getElementById("mailenter");
    pwact = document.getElementById("pwenter");

    const newArrayProduct = data.map((item) =>
    {
      if(item.loginUser === emailact.value) {
          if(item.passwordUser === pwact.value) {
            setVariable(item.idUser)
          }
      }
  })

    
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
      <Form style={{ width: '35%', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 className="mb-4 text-center">Connexion</h2>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" id="mailenter" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id="pwenter" />
        </Form.Group>

        <Button variant="primary" onClick={handleConnect} style={{ marginTop: "10px"}}>
          Se connecter
        </Button>
      </Form>
    </div>
  );
}

export default Login;