import { useState } from 'react';
import './index.scss';

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

function Result({ correctQuestion }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correctQuestion} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVar }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVar(index, question.correct)} key={variant}>{variant}</li>
        ))}

      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [correctQuestion, setCorrectQuestion] = useState(0)
  const question = questions[step]

  const onClickVar = (index, correct) => {
    setStep(step + 1)
    if (index === correct) {
      setCorrectQuestion(correctQuestion + 1)
    }
    console.log(correctQuestion);
  }
  return (
    <div className="App">
      {questions.length !== step ? <Game
        step={step}
        question={question}
        onClickVar={onClickVar}
      /> : <Result
        correctQuestion={correctQuestion}

      />}
    </div>
  );
}

export default App;
