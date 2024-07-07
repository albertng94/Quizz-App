import Quiz from "./components/Quiz.jsx";
import Summary from "./components/Summary.jsx";
import QuizStageContextProvider from "./store/quizStage-context.jsx";
import { QuizStageContext } from "./store/quizStage-context.jsx";
import { useContext } from "react";


const App = () => {

    const { currentStage } = useContext(QuizStageContext);

    let content = <Quiz />;

    if (currentStage === "resultsStage") {
        content = <Summary />;
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
