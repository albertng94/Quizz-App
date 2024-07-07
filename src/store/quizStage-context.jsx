import { useReducer, createContext } from "react";

export const QuizStageContext = createContext({
    stage: "startStage",
    answers: [],
    stageChange: () => {},
});

function quizStageReducer(state, action) {
    if (action.type === "startStageEnding") {
        return {
            ...state,
            stage: "questionsStage"
        };
    } else if (action.type === "questionsStageEnding") {
        return {
            ...state,
            stage: "resultsStage",
            answers: action.payload
        }
    } 
    return state;
}

export default function QuizStageContextProvider({ children }) {

    const [quizStageState, quizStageDispatch] = useReducer(
        quizStageReducer,
        {
            stage: "startStage",
            answers: []
        }
    );

    function handleStageChange(id, answers) {
        quizStageDispatch({
            type: id,
            payload: answers
        });
    }

    let quizStageCtx = {
        currentStage: quizStageState.stage,
        selectedAnswers: quizStageState.answers,
        stageChange: handleStageChange
    };

    return <QuizStageContext.Provider value={quizStageCtx}>
        {children}
    </QuizStageContext.Provider>
}