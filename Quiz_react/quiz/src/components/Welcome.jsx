import Quiz from "../img/quiz.svg";
import "../components/Welcome.css";
const Welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para começão</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
