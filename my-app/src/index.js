import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Card from './components/card';
import data from './data/travavelData'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  
);

function App(){
  const dataz = data.map( (data) => <Card  key = {data.id} {...data}/>)

  return (
    <div className='app-container'>
        <Header/>
        { dataz }
    </div>
  );
}

