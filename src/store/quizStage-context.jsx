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
            stage: "resultsStage"
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

    function handleStageChange(id) {
        console.log(id);
        quizStageDispatch({
            type: id,
            payload: {}
        });
    }

    console.log(quizStageState);

    let quizStageCtx = {
        currentStage: quizStageState.stage,
        stageChange: handleStageChange
    };

    return <QuizStageContext.Provider value={quizStageCtx}>
        {children}
    </QuizStageContext.Provider>
}