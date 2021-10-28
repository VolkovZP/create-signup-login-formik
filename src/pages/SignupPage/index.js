import React from 'react';
import ContainerForm from '../../components/ContainerForm';
import Signup from '../../components/form/Signup';
export default function SignupPage () {
  return (
    <ContainerForm
      titles='CREATE AN ACCOUNT'
      subtitles='We always keep your name and email address private.'
    >
      <Signup />
    </ContainerForm>
  );
}
