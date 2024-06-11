import Quiz from "./components/Quiz.jsx";
import Start from "./components/Start.jsx";
import QuizStageContextProvider from "./store/quizStage-context.jsx";


function App() {
    
    return (
        <QuizStageContextProvider>
            <Quiz>
                <Start />
            </Quiz>
        </QuizStageContextProvider>
    );
}

export default App;
