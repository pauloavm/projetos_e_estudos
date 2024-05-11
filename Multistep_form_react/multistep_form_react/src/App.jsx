// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps.jsx";

// Hooks
import { useForm } from "./hooks/useForm.jsx";
import { useState } from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldeHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  

  const formComponents = [
    <UserForm data={data} />,
    <ReviewForm data={data} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isfirstStep } =
    useForm(formComponents);

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>
            Estamos felizes com sua compra! Utilize o formulário para avaliar o
            produto
          </p>
          <div className="form-container">
            <Steps currentStep={currentStep} />
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
              <div className="inputs_container">{currentComponent} </div>
              <div className="actions">
                {!isfirstStep && (
                  <button
                    type="button"
                    onClick={() => changeStep(currentStep - 1)}
                  >
                    <GrFormPrevious /> <span>Voltar</span>
                  </button>
                )}
                {!isLastStep ? (
                  <button type="submit">
                    <span>Avançar</span>
                    <GrFormNext />
                  </button>
                ) : (
                  <button type="button">
                    <span>Enviar</span>
                    <FiSend />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
