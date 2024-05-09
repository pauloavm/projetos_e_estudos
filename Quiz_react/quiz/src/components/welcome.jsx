import React from "react";
import Quiz from "../img/quiz.svg";


const welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quizz" />
    </div>
  );
};

export default welcome;
