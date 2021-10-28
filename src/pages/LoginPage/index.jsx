import React from 'react';
import ContainerForm from '../../components/ContainerForm';
import Login from '../../components/form/Login';
export default function LoginPage () {
  return (
    <ContainerForm titles='LOGIN TO YOUR ACCOUNT'>
      <Login />
    </ContainerForm>
  );
}
