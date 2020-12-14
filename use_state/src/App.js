import React from 'react';

import './App.css'; // Подключаем стили для страницы

// Хук useState нужно использовать если на странице есть значения которые меняются в ходе использования страницы.

function App() {

  const [numbers, setNumbers] = React.useState([]);  // создаем Хук ,явно, и прописываем React.useState для демонстрации откуда берем Хук
  // так же можно использовать деструктуризацию и вверху передать что берем useState из React 
  // import React, { useState } from 'react';

  // В постоянной у нас значения numbers, которое отслеживается, по умолчанию можно присвоить любое значение, в нашем случае это React.useState([]); переданный пустой массив

  // Второе значение это функция которая возращает измененое значение и присвает его numbers

  const addNumber = () => { // функция создает любое число до 10 и округляет его до целых
    const randNumbers = Math.round(Math.random() * 10);
    setNumbers([...numbers, randNumbers]); // после генерации числа, вызываем функцию setNumbers и через Spread указываев что в работающий массив, добавляем генерированое число.
  };

  return (
    <div className="App">
      <header className="App-header">useState</header>
      <ul>
        {
          numbers.map((item, index) => // методом MAP перебираем масссив nubmers, используя параметры получаем элементы массива и их индексы.
            <li key={index}>{item}</li>) // в KEY необходимо передавать уникальные значения
        }
      </ul>
      <button onClick={addNumber}>Добавить число</button>{/* onClick вызывает функцию addNumber*/}
    </div >
  );
}

export default App;
