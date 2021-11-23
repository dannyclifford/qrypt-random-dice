import React from 'react';
import RollDice from './RollDice';
import './App.css';
// import axios from 'axios';

function App(handlerKey) {

  const entString = process.env.REACT_APP_ENTROPY_STRING;
    
  const sides = ['one', 'two', 'three',
    'four', 'five', 'six'];
  
  // const [entString, handleEntString] = React.useState();

  // try {
  //   axios.request('https://api-eus.qrypt.com/api/v1/quantum-entropy?size={ENTROPY_VOLUME_IN_KB}', {
  //     headers: {
  //       "Authorization": `Bearer ${process.env.REACT_APP_AUTH_KEY}`,
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     // mode: 'no-cors'
  //   }).then(res => {
  //     console.log(res);
  //     // handleEntString(res.random);
  //   })
  // } catch (err) {
  //   console.log(err);
  // }
  
  return (
    <div className="App">
      <RollDice entString={entString} sides={sides} />
    </div>
  );
}

export default App;
