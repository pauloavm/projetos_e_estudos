import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return <div>Chupa</div>;
};

export default Question;
