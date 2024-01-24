import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useVariable } from '../VariableUser/VariableContext';






function AddBeast() {

  const { maVariable, setVariable } = useVariable();


  const handleConnect = () => {

  }

  const GoBack = () => {
    window.location.href = "/Home";
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
      <Form style={{ width: '35%', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 className="mb-4 text-center">Connexion</h2>

        <Form.Group>
          <Form.Label>Nom de la bête</Form.Label>
          <Form.Control type="text" placeholder="Enter Beast" id="nameenter" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description de la bête</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" id="descriptionenter" />
        </Form.Group>

        <Button variant="primary" onClick={handleConnect} style={{ marginTop: "10px", width: "30%"}}>
          Se connecter
        </Button>
        <Button variant="primary" onClick={GoBack} style={{ marginTop: "10px", marginLeft: "50%", width: "20%"}}>
          Fermer
        </Button>
      </Form>
    </div>
  );
}

export default AddBeast;