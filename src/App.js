import React, { useState } from 'react';

import './index.css';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];
function Result({ current }) {
  console.log(current);
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {current} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button >
      </a>
    </div>
  );
}

function Game({ question, onClickNextQustions, state }) {
  const procent = Math.round(state / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (<li onClick={() => onClickNextQustions(index)} key={text}>{text}</li>))
        }
      </ul>
    </>
  );
}

function App() {
  const [state, setState] = useState(0);
  const [current, setCurrent] = useState(0);
  const question = questions[state];

  const onClickNextQustions = (index) => {
    setState(state + 1);

    if (question.correct === index) {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="App">
      {
        state !== questions.length ? <Game onClickNextQustions={onClickNextQustions} question={question} state={state} /> : <Result current={current} />
      }
    </div>
  );
}

export default App;
