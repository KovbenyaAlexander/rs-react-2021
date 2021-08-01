import React, { useState } from 'react';
import Form from './Components/Form.js/Form';
import Cards from './Components/Cards/Cards';
import Message from './Components/Message/Message';

const App = () => {
  const [cards, setCards] = useState([]);
  const [isShowMessage, setShowMessage] = useState(false);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const showMessage = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div>
      <Form addCard={addCard} setShowMessage={showMessage} />
      <Message isShowMessage={isShowMessage} />
      <Cards cards={cards} />
    </div>
  );
};

export default App;
