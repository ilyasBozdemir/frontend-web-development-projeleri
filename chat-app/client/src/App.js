import React from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [text, setText] = React.useState(null);

  React.useEffect(() => {
    axios.get('localhost:3001').then((response) => {
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
