import Title from "./components/Title";
import Counter from "./components/Counter";

import Volcano from "./assets/volcano.jpg";

import useCountdown from "./hooks/useContdown";

import "./App.css";

function App() {
  const x = useCountdown("Jan 1, 2025 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${Volcano})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2025" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
