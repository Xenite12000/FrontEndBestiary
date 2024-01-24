import React from 'react';
import { useVariable } from './VariableContext';

const Page1 = () => {
  const { maVariable, setVariable } = useVariable();

  console.log(maVariable);
};

export default Page1;