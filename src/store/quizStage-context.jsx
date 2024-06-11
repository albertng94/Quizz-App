import { useState, createContext } from "react";

export const QuizStageContext = createContext({
    stage: "Start",
    answers: []
});

export default function quizStageContextProvider({ children }) {

    const [quizStage, setQuizStage] = useState({
        stage: "Start",
        answers: []
    });

    let quizStageCtx = {
        currentStage: quizStage.stage,
    };

    return <QuizStageContext.Provider value={quizStageCtx}>
        {children}
    </QuizStageContext.Provider>
}