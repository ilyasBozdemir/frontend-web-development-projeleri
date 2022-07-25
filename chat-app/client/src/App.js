import React from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const ENDPOINT='https://ib-chat-app-server.herokuapp.com/';
  const [text, setText] = React.useState(null);

  React.useEffect(() => {
    axios.get(ENDPOINT).then((response) => {
      setText(response.data);
    });
  }, []);

  return (
    <>
      {text}
    </>
  );
}

export default App;
