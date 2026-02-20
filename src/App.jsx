import React from 'react';
import CardPalleteList from './Components/CardPalleteList/CardPalleteList';
import './App.css';

function App() {

  const colors_card = [
    {
        id: 1,
        likes: 10,
        date: '3 days ago',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
    },
    {
        id: 2,
        likes: 20,
        date: '2 days ago',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
    },
    {
        id: 3,
        likes: 30,
        date: '1 day ago',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
    }
  ];

  return (
    <div className="main-container">
      <h1 style={{textAlign: 'center', fontFamily: 'sans-serif'}}>Color Hunt Clone</h1>
      <CardPalleteList colors_card={colors_card} />
    </div>
  );
}

export default App;