import React from 'react';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Salman', 'Sakib', 'Shuvo']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ]

  const nayokNames = nayoks.map(nayok =>nayok)
  console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
       <p>I am React Man</p>
       <ul>
        <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li>
       </ul>
      <products product = {products[0]}></products> 
      </header>
    </div>
  );
}

export default App;
