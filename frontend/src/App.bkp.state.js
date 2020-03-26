import React, { useState } from 'react';

// JSX --> Javascript XML
// Componente --> Função que retorna código HTML

// Importa componentes externos
import Header from './Header';

// Cria um novo componente App
function App() {

  const [counter, setCounter] = useState(0);

  // array [valor, atualizacaoValor]

  function increment() {
    //counter++;
    setCounter(counter+1);  
  }

  return (
    <div>
      <Header title="Semana Oministack!!!">Contador: {counter}</Header>
      <button onClick={increment}>Adicionar</button>
    </div>
  );
}

export default App;