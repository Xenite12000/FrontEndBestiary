import { createContext, useContext, useState, useEffect } from 'react';

const VariableContext = createContext();

export const VariableProvider = ({ children }) => {
  const [maVariable, setMaVariable] = useState(() => {
    const storedVariable = localStorage.getItem('maVariable');
    return storedVariable ? JSON.parse(storedVariable) : null;
  });

  const setVariable = (value) => {
    setMaVariable(value);
  };

  useEffect(() => {
    localStorage.setItem('maVariable', JSON.stringify(maVariable));
  }, [maVariable]);

  return (
    <VariableContext.Provider value={{ maVariable, setVariable }}>
      {children}
    </VariableContext.Provider>
  );
};

export const useVariable = () => {
  return useContext(VariableContext);
};