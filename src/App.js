import React, { useState } from 'react';
import Form from './Components/Form.js/Form';
import Cards from './Components/Cards/Cards';

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <Form addCard={addCard} />
      <Cards cards={cards} />
    </div>
  );
};

export default App;
