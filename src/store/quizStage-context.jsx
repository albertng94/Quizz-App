import { useReducer, createContext } from "react";

export const QuizStageContext = createContext({
    stage: "start",
    answers: [],
    stageChange: () => {},
});

function quizStageReducer(state, action) {
    if (action.type === "start") {
        return {
            ...state,
            stage: "q1"
        };
    }
    return state;
}

export default function QuizStageContextProvider({ children }) {

    const [quizStageState, quizStageDispatch] = useReducer(
        quizStageReducer,
        {
            stage: "start",
            answers: []
        }
    );

    function handleStageChange(id) {
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