import Start from "../components/Start.jsx";
import Question from "../components/Question.jsx";
import { QuizStageContext } from "../store/quizStage-context.jsx";
import { useContext } from "react";

export default function Quiz() {

    const { currentStage } = useContext(QuizStageContext);

    let content = <Start />;

    if (currentStage !== "startStage") {
        content = <Question />;
    }

    return (
        <div id="quiz">
            {content}
        </div>
    );
}