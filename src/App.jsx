import Quiz from "./components/Quiz.jsx";
import QuizStageContextProvider from "./store/quizStage-context.jsx";
import { QuizStageContext } from "./store/quizStage-context.jsx";
import { useContext } from "react";


const App = () => {

    const { currentStage } = useContext(QuizStageContext);

    let content = <Quiz />;

    if (currentStage === "results") {
        content = "Results-Component";
    }

    return (
        <>
            {content}
        </>
    );
};

const AppWithProvider = () => (
    <QuizStageContextProvider>
        <App />
    </QuizStageContextProvider>
);

export default AppWithProvider;
