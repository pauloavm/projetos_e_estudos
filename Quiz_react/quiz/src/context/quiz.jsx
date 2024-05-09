import { Children, createContext } from "react";

export const Quizcontext = createContext();

export const QuizProvider = ({ children }) => {
  return <Quizcontext.Provider>{children}</Quizcontext.Provider>;
};
